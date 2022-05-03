import {createSlice, createAsyncThunk} from '@reduxjs/toolkit' 
import customFetch from '../services/custom-fetch'
import { toast } from 'react-toastify'

export const signupUser = createAsyncThunk("users/signupUser",
    async ({name, email, password}, thunkAPI)=>{
        const details = {name,email, password}
        console.log(details,'details')
        try{
            const response = await customFetch.post('auth/register', details)
            return response.data
           
        }catch(err){
            //console.log('errr', err.data)
             return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)
const initialStateValue = {
    name: '', 
    password:'', 
    email:'', 
    isFetching:false,
    isSuccess:false,
    isError:false,
    messageError:'',
   
}
export const userSlice = createSlice({
    name:'user',
    initialState: initialStateValue,
    reducers:{
        cleardisplay: (state) => {
           state = "pppp"
        },
        change: (state) => {
            state.messageError = "poop"
        }
    },
    extraReducers:{
        [signupUser.fulfilled]:(state, { payload })=> {
            state.isFetching = false;
            state.isSuccess = true;
            

        },
        [signupUser.pending]:(state)=>{
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) =>{
            state.isFetching = false;
            state.isError = true;
            state.isSuccess = false
            state.messageError = payload.msg
            
        }

    }

})


export const userSelector = state => state.user
export const {cleardisplay, change} = userSlice.actions
export default userSlice.reducer