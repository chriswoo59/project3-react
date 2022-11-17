//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
//import { Routes } from 'react-router-dom';
import BurgerToppingsTable from './components/BurgerToppingsComponents/BurgerToppingsTable';
import PizzaToppingsTable from './components/PizzaToppingComponents/PizzaToppingsTable';
import CompleteBurgerOrder from './components/CompleteOrder';
import React from "react";
//import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  Route,
  Navigate, 
  Routes
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import CreateUserForm from './CreateUserForm';






function App() {
  return (
            

    <div className="container">
        
        <div style= {{height: "20px"  }} ></div>

             
              <Routes>

                <Route path="/dashboard" element={<Dashboard/>} exact />

                <Route path="/" element= {<Navigate exact from="/" to="/dashboard" />} exact />

                <Route path= "/Login" element={<Login/>} />

                <Route path= "/CreateUserForm" element={<CreateUserForm/>} />

                <Route path="/dashboard" element={<Dashboard/>} />

                <Route path="/home" element={ <Home/> } exact />
                
                <Route path="/view" element={ <BurgerToppingsTable/> } />
                
                <Route path="/view2" element={ <PizzaToppingsTable/> } />
                
                <Route path="/complete" element={ <CompleteBurgerOrder/> } />

                {/* <Route path="*" element= {<Navigate from="/" to="/Login" />} /> */}

                
              </Routes>

            
                {/* <ProtectedRoute path="/dashboard" element={<Dashboard/>} />
                <ProtectedRoute path="/home" element={ <Home/> } exact />
                <ProtectedRoute path="/view" element={ <BurgerToppingsTable/> } />
                <ProtectedRoute path="/view2" element={ <PizzaToppingsTable/> } />
                <ProtectedRoute path="/complete" element={ <CompleteBurgerOrder/> } /> */}
      </div>


  );
}

export default App;
