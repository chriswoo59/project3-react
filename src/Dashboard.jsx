import React, { Component, useState } from "react";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import withRouter from "./CustomWithReact";
import Home from './components/Home';
import Header from './components/Header';
//import { Routes } from 'react-router-dom';
import BurgerToppingsTable from './components/BurgerToppingsComponents/BurgerToppingsTable';
import PizzaToppingsTable from './components/PizzaToppingComponents/PizzaToppingsTable';
import CompleteBurgerOrder from './components/CompleteOrder';
import Login from './Login';
import useToken from './useToken';
import ProtectedRoute from "./useHooks/ProtectedRoute";





 



const Dashboard = () => {
   //const token = getToken()
   const {token, setToken} = useToken()
   
    if(!token){
        {return <Login setToken={setToken}/>}
        
    
   

  return (
     <div className='text-white font-bold text-2xl'>

     </div>
  )
}
}

export default Dashboard;