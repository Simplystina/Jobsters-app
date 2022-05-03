import React, { useEffect, useState } from 'react'
import './Register.css'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from '../../Features/user'
import { cleardisplay, change } from '../../Features/user';
import { useNavigate } from "react-router-dom"


import { registerUser, loginUser } from '../../services/connectApi';



const Register = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isFetching, isSuccess, isError, messageError} = useSelector(userSelector)
    const [isRegistered, setIsRegistered] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const registerStatus = ()=>{
        setIsRegistered(!isRegistered)
    }
    const submitForm = async ()=>{
        if (isRegistered && email && password) {
            const data = {email:email, password:password}
            const userInfo = await loginUser(data)
            console.log(userInfo, 'userinfo')
            if (!userInfo){
                toast.error('Invalid credentials')
                return
            }
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
           setEmail('')
           setPassword('')
           toast.success("Login Successful")
           navigate(`/dashboard`)
        
        } 
        else if(!isRegistered && email && name && password){
            const data = {email:email, password:password, name:name}
            console.log(data, 'sign up')
            if (password.length >= 8) {
                console.log(data)
                const registerInfo = registerUser(data)
               if (!registerInfo) {
                    toast.error('User already exists')
                    return
               }
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                );
                toast.success("Successfully Registered")
                 
               
            }else{
                toast.warning('Password should be upto 8 characters')
            }
            
            

        }else{
            toast.warning('Please fill all the fields herr')
        }
          
    
    }
    
  return (
      <>
      
      <ToastContainer 
        autoClose={2000}
      
      />
    <div className='login-container'>
       <img src={logo} alt='logo'></img>
       <h4>{isRegistered ? 'Login' : 'Register'}</h4>
       {!isRegistered &&
        <form className='form'>
           <label>Full Name</label>
           <input className='input' type='text' id='name' name='name'
           onChange={e => setName(e.target.value)}
           />
       </form>
       }
       <form className='form'>
           <label>Email</label>
           <input type='email' id='email' name='email' className='input'
            onChange={e => setEmail(e.target.value)}
           />
       </form>
       <form className='form'>
           <label>Password</label>
           <input type='password' id='password' name='password' className='input'
            onChange={e => setPassword(e.target.value)}
           />
       </form>
       <button onClick={submitForm} className='btn submit-btn'>submit</button>
        <p>{isRegistered?'Not yet a member?' :'Already a member?'} <span onClick={registerStatus}>{isRegistered?'Register' :'Login'}</span></p>
     <h2>{isFetching}</h2>
    </div>
    </>
  )
}

export default Register
