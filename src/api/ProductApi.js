
const URI = "http://localhost:8080/api/user"

const ProductApi = {

        getProducts: (setProducts) => {
                

            // fetch( URI ) => retrieving the data
            fetch(URI)
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


        createProduct: (product, setProdId) => {

            fetch( URI, {
                method: "POST",
                header: { "Content-Type": "application/json" }, // pass token in header
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


