import React, { useEffect, useState } from 'react';
import Header from './Header';




const CompleteOrder = () => {

const tableData = ( p =>
    <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        

    </tr>
    )

return (

    <>

   

<div>
    <h2>Completed Order</h2>

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

</>
);
};

export default CompleteOrder;