import React, { useEffect, useState } from 'react';
//import { Button } from 'react-native';


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
        "name": "Pepporoni",
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

 

const PizzaToppingsTable = () => {


    const tableData = productDummyList.map( p =>
                                                <tr key={p.id}>
                                                    <td>{p.id}</td>
                                                    <td>{p.name}</td>
                                                    <td>{p.price}</td>
                                                    
                                                <td>
                                                    <button type="submit" className='btn btn-primary'>
                                                        Add
                                                    </button>
                                                </td>
                                                </tr>
                                                )

    return (
        <div>
            <h2>Pizza Topping Page</h2>

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

export default PizzaToppingsTable;