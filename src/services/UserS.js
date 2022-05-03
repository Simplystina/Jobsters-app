import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "./custom-fetch";
import axios from "axios";


export const signupUser = createAsyncThunk("users/signupUser",
    async ({name, email, password}, thunkAPI)=>{
        const details = {name,email, password}
        try{
            const response = await customFetch.post('auth/testingRegister', details)
        
        }catch(err){
            console.error(err)
        }
    }
)