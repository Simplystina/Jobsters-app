import { Appwrite } from 'appwrite';
import { useState } from 'react';




const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost:8080/v1') // Your Appwrite Endpoint
    .setProject('626b0cf9a23f3eb4e126') // Your project ID
;


export default appwrite


export function registerUser ({email, password, name}){
    console.log(email,'email')
    let promise = appwrite.account.create('unique()', email, password, name);
    
    promise.then(function (response) {
        console.log(response); // Success
        return response
    }, function (error) {
        return error
        console.log(error); // Failure
      });
}


export async function loginUser({email, password}){


    try {
        let promise = await appwrite.account.createSession(email, password);
        return promise
    } catch (error) {
        console.error(error)
    }

   /* promise.then(function (response) {
      console.log(response); // Success
      isLogin = true
      return isLogin
    }, function (error) {
        console.log(error); // Failure
        isLogin = false
        return isLogin
    });*/

    
}


