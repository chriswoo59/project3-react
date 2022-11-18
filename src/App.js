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
import ProtectedRoute from "./useHooks/ProtectedRoute";
import CreateUserForm from './CreateUserForm';
import BurgerForm from './components/BurgerForm';
import PizzaForm from './components/PizzaForm';







function App() {

  return (
            

    <div className="container">
        <Header />
        <div style= {{height: "20px"  }} ></div>

             
              <Routes>

                  <Route path="/" element= {<Navigate exact from="/" to="/Login" />} exact />

                  <Route path= "/CreateUserForm" element={<CreateUserForm/>} />

                  <Route path= "/Login" element={<Login/>} />

                <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} exact />
                
                <Route path="/view" element={ <BurgerToppingsTable/> } />
                
                <Route path="/view2" element={ <PizzaToppingsTable/> } />
                
                <Route path="/complete" element={ <CompleteBurgerOrder/> } />

                <Route path="/components/Home" element={ <Home/> } exact />

                <Route path="/components/BurgerForm" element={ <BurgerForm/> } exact />

                <Route path="/components/PizzaForm" element={ <PizzaForm/> } exact />

                {/* <Route path="*" element= {<Navigate from="/" to="/Login" />} /> */}

                

              </Routes>

            
                {/* <ProtectedRoute path="/dashboard" element={<Dashboard/>} />
                
                <ProtectedRoute path="/view" element={ <BurgerToppingsTable/> } />
                <ProtectedRoute path="/view2" element={ <PizzaToppingsTable/> } />
                <ProtectedRoute path="/complete" element={ <CompleteBurgerOrder/> } /> */}
      </div>


  );
              

}

export default App;
