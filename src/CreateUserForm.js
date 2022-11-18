import React, { useState } from 'react';
import UserApi from './api/UserApi';




    const CreateUserForm = () => {

        const [ userName, setUsername ] = useState("");
        const [ password, setPassword ] = useState("");
        const [ email, setEmail ] = useState("");
        const [ showAlert, setShowAlert ] = useState(false);
        const [ userId, setUserId ] = useState(0);
    
        const handleSubmit = (event) => {
    
            const user = {
                "username": userName,
                "password": password,
                "email": email
    
            }
    
            // make the POST request
            // take te product generated and find the id
            // set th id for the alert
    
            UserApi.createUser(user, setUserId)
            
            setShowAlert(true)
    
            event.preventDefault();
    
        }

    return(
        
        <>

       


        <div>

        <h2>Create User Form Page</h2>
       
     
               
                        <form onSubmit={handleSubmit} >
                            {/* body contains our form */}
                            <div class="modal-body">
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" required 
                                            value={userName} 
                                            onChange={(event) => setUsername(event.target.value)} /><br></br>
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="text" className="form-control" id="password" name="password" required 
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)} /><br></br>
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" required 
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)} /><br></br>
                                </div>
                                {/* <div className="form-group">
                                    <label for="dob">Dob</label>
                                    <input type="number" className="form-control" id="dob" name="dob" min="00.00" max="00.00" required 
                                            value={props.dob}
                                            onChange={(event) => props.setDob(event.target.value)} />
                                </div> */}
                           
                            </div>

                            {/* footer has the save button */}
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-primary" value="Register"/><br></br>
                            </div>
                        </form>

                        { 
                        showAlert
                        &&
                        <div class="alert alert-warning" role="alert">
                            User was Created with id = {userId}
                        </div>
                        }

         
    </div>
    </>       
    );
}


    

export default CreateUserForm;