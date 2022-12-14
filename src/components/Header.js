import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="display-2">Burgers/Pizza Website</h1>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/Login" >Login</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link className='nav-link' to="/complete">Complete Order</Link>

                        <Link className="nav-link" to="/view2">View Pizza Toppings</Link>

                        <Link className="nav-link" to="/view">View Burger Toppings</Link>

                        <Link className="nav-link" to="/components/BurgerForm">BurgerForm</Link>

                        <Link className="nav-link" to="/components/PizzaForm">PizzaForm</Link>

                        <Link className="nav-link" to="/dashboard">Dashboard</Link>

                        <Link className="navbar-brand" to="/components/Home" >Home</Link>

                        <Link className='nav-link' to="/CreateUserForm">Register</Link>

                    </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;