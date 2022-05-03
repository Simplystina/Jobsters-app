import axios from "axios"
import customFetch from "./custom-fetch"
const base_url = 'https://jobify-prod.herokuapp.com/api/v1/toolkit'


const register = async (details)=>{
    try {
       const res = await customFetch.post('auth/testingRegister', details)

    } catch (error) {
        console.error(error)
    }
}

const login = async (details)=>{
    try {
        const res = await customFetch.post('/auth/login',details)
        if(res.data.accessToken){
            localStorage.setItem("user", JSON.stringify(res.data))
        }
    } catch (err) {
        console.error(err)
    }
    
}

const logout = () =>{
    localStorage.removeItem('user')
}

export default {register
, login, logout}