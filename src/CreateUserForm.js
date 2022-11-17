import React, { useState } from 'react';



function createUserFormModal(props) {
    return(
        <div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="createUserModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        {/* header has the title at top and x button to close modal */}
                        <div class="modal-header">
                            <h5 class="modal-title" id="createUserModalLabel">Create User Form</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            
                        <form onSubmit={props.submit} method="GET">
                            {/* body contains our form */}
                            <div class="modal-body">
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" required 
                                            value={props.username} 
                                            onChange={(event) => props.setUsername(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="text" className="form-control" id="password" name="password" required 
                                            value={props.password}
                                            onChange={(event) => props.setPassword(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" required 
                                            value={props.email}
                                            onChange={(event) => props.setEmail(event.target.value)} />
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
                                <input type="submit" class="btn btn-primary" value="Save"/>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
    );
}

function CreateUserCrud(props) {

    const [userList, setUserList] = useState( getUserList() );
    const [currUsername, setCurrUsername] = useState("");
    const [currPassword, setCurrPassword] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    //const [currDob, setCurrDob] = useState(0);

    const closeModal = (event) => {
        
        

    };

    const submit = (event) => {

        // add new item to list
        productList.push({
            username: currUsername,
            password: currPassword,
            email: currEmail,
           // dob: currDob
        });

        // clear form
        setCurrUsername("");
        setCurrPassword("");
        setCurrEmail("");
        //setCurrDob(0);

        // close modal
        closeModal();
        
        // prevent reload of page
        event.preventDefault();

    };

    return (
         <div className="container">
               {/* <h3>Product List</h3>
               <br/><br/>

               <ProductTable productList={productList}/> */}

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#productModal">
                Register User
            </button>

            <createUserFormModal username={currUsername} password={currPassword} email={currEmail}
                            setUsername={setCurrUsername} setPassword={setCurrPassword} setEmail={setCurrEmail}
                            submit={submit} />
        </div>
    );
}


export default CreateUserCrud;