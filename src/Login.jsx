import React, { Component, useState } from 'react';
import { Navigate } from "react-router-dom";
import "./Login.css";
import Dashboard from "./Dashboard";
import PropTypes from 'prop-types';
import LoginHeader from './LoginHeader';

const URI = "http://localhost:8080/authenticate";


async function LoginUser(credentials) {
    return fetch(URI,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            credentials: 'include'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = ({setToken}) => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await LoginUser({
            "username": userName,
            "password": password
           
        })
        console.log(token);
        setToken(token)
       
        
    }
  return (
    <>
    <LoginHeader/>
    
    <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
    {/* <div className='fixed w-full px-4 py-24 z-50'>
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
    <div className='max-w-[320px] mx-auto py-16'> */}
        <div className='col-sm-6 offset-sm-3'>
       
        <h1>Burgers/Pizza Login Portal</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
        <label htmlFor='prod-name' className='form-label' >
                        Username:
                    </label>
                    <input type="text" required onChange={(e)=>setUserName(e.target.value)} className="form-control"/> <br></br>
                    <label htmlFor='prod-name' className='form-label' >
                        Password:
                    </label>
                    <input type="text" required onChange={(e)=>setPassword(e.target.value)} className="form-control"/> <br></br>
                    <button className='btn btn-primary'  >Login</button>
            <div>
                <p><input type="checkbox" />Remember Me</p>
            </div>
        </form>
        </div>
    {/* </div>
    </div>
    </div> */}
    </>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login


        // post()
        // {
        //     let token="Bearer "+ this.state.store.token
        //     fetch('http://localhost:8080/authenticate', {
        //         method:"POST",
        //         hearders: {
        //             'Authorization': token
        //         },
        //         body:JSON.stringify(this.state.post)
        //     } ).then((response) => {
        //         response.json().then((result)=>{
        //             console.warn("result",result);
        
        //         })
        //     })

        // }