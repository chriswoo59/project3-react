import React, { useEffect, useState } from 'react';

import Header from '../Header';
import ProductApi from '../../api/ProductApi';



const productDummyList = 
[
    {
        "id": 1,
        "name": "cheese",
        "price": .59,
        //"qty": 1
    },
    {
        "id": 2,
        "name": "lettuce",
        "price": 1.00,
       // "qty": 2
    },
    {
        "id": 3,
        "name": "tomatoes",
        "price": .99,
        //"qty": 1
    }


]

 

const ProductsTable = () => {

    <Header />
    const[ products, setProducts ] = useState([])

    //useEffect( function, [] ) => function gets excuted when component gets mounted
    useEffect( () => {
        console.log("Hello this component was mounted")

            ProductApi.getBurgers(setProducts)

    }, [] )

   
    const tableData = products.map( p =>
                                                <tr key={p.id}>
                                                    <td>{p.id}</td>
                                                    <td>{p.name}</td>
                                                    <td>{p.cost}</td>
                                                    
                                                <td>
                                                    <button type="submit" className='btn btn-primary'>
                                                        Add
                                                    </button>
                                                </td>
                                                </tr>
                                                )

    return (
        <div>
            <h2>Burger Topping Page</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                       
                    </tr>
                </thead>

                <tbody>
                    { tableData }
                </tbody>
            </table>

        </div>
    );
};

export default ProductsTable;