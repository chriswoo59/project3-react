
const URI1 = "http://localhost:8080/api/food/burgers";
const URI2 = "http://localhost:8080/api/food/pizzas";
const URI3 = "http://localhost:8080/api/food/burger";
const URI4 = "http://localhost:8080/api/food/pizzas"

const ProductApi = {

        getBurgers: (setProducts) => {
                

            // fetch( URI ) => retrieving the data
            fetch(URI1)
                .then( (result) => {        // go here if successful (200 response)
                    console.log("RESULT: ")
                    console.log(result)    

                    return result.json();

                } )

                .then( (data) => {          // data => result.json() returned from previously

                    console.log("DATA:")
                    console.log(data)

                    // call the setProducts functoin from our state and put in the data from
                    // our API call
                    setProducts(data)
                } )
                .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

             
        },

        getPizzas: (setProducts) => {
                

            // fetch( URI ) => retrieving the data
            fetch(URI2)
                .then( (result) => {        // go here if successful (200 response)
                    console.log("RESULT: ")
                    console.log(result)    

                    return result.json();

                } )

                .then( (data) => {          // data => result.json() returned from previously

                    console.log("DATA:")
                    console.log(data)

                    // call the setProducts functoin from our state and put in the data from
                    // our API call
                    setProducts(data)
                } )
                .catch( (error) => { console.log(error) } ) // if fails go here (400/500 response)

             
        },


        createBurger: (product, setProdId) => {

            fetch( URI3, {
                method: "POST",
                headers: { "Content-Type": "application/json" ,
                'Accept': 'application/json',   
                'Content-Type': 'application/json',
                credentials: 'include'
            
            }, // pass token in header
                body: JSON.stringify(product) // convert object to json string
            } )
                .then( result => result.json() )
                .then( data => {
                    console.log("PRODUCT CREATED")
                    console.log(data)           // data -> product created

                    setProdId( data.id )
                } )
                .catch( (error) => { console.log(error) } )

        },


        createPizza: (product, setProdId) => {

            fetch( URI4, {
                method: "POST",
                header: { "Content-Type": "application/json", 
                            'Accept': 'application/json',   
                            'Content-Type': 'application/json',
                            credentials: 'include'
            
            }, // pass token in header
                body: JSON.stringify(product) // convert object to json string
            } )
                .then( result => result.json() )
                .then( data => {
                    console.log("PRODUCT CREATED")
                    console.log(data)           // data -> product created

                    setProdId( data.id )
                } )
                .catch( (error) => { console.log(error) } )

        }

}

// allows you to use this object outside of this file
export default ProductApi;


