import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import BurgerToppingsTable from './components/BurgerToppingsComponents/BurgerToppingsTable';
import PizzaToppingsTable from './components/PizzaToppingComponents/PizzaToppingsTable';
import CompleteBurgerOrder from './components/CompleteOrder';



function App() {
  return (
    <div className="container">

    <Header/>

      <div style= {{height: "20px"  }} ></div>
    <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/view" element={ <BurgerToppingsTable/> } />
        <Route path="/view2" element={ <PizzaToppingsTable/> } />
        <Route path="/complete" element={ <CompleteBurgerOrder/> } />
    </Routes>

      </div>
  );
}

export default App;
