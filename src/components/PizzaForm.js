import React, {useState} from 'react';
import ProductApi from '../api/ProductApi';

const ProductsForm = () => {

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ showAlert, setShowAlert ] = useState(false);
    const [ prodId, setProdId ] = useState(0);

    const handleSubmit = (event) => {

        const product = {
            "name": name,
            "price": price,

        }

        // make the POST request
        // take te product generated and find the id
        // set th id for the alert

        ProductApi.createPizza(product, setProdId)
        
        setShowAlert(true)

        event.preventDefault();

    }

    return (
        <div>
          

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='prod-name' className='form-label' >
                        Name 
                    </label>
                    <input type="text"
                            className="form-control"
                            id='prod-name' 
                            required 
                            name='prod-name'
                            value={name}
                            onChange={ (event) => {setName(event.target.value) } }
                    />
                </div>

                <div>
                    <label htmlFor='prod-price' className='form-label' >
                        Price
                    </label>
                    <input type="number"
                            className="form-control"
                            id='prod-price' 
                            required 
                            min="0"
                            step="0.01"
                            name='prod-price'
                            value={price}
                            onChange={ (event) => {setPrice(event.target.value) } }
                            />
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>    
                
            </form>    

            { 
            showAlert
            &&
            <div class="alert alert-warning" role="alert">
                Product was Created with id = {prodId}
            </div>
            }

        </div>
    );
};

export default ProductsForm;