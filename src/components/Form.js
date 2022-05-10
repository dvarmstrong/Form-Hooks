import React, {useState} from 'react';


const Form = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();


    //     const NewUser = {FirstName, LastName, Email, Password, ConfirmPassword};
    //     console.log(NewUser);

    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");

    // };

    return (
        <div>
        <form >
            <div>
                <label htmlFor='FirstName'>First Name: </label>
                <input type='text' value={FirstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='LastName'>Last Name: </label>
                <input type='text' value={LastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Email'>Email : </label>
                <input type='text' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Password'>Password : </label>
                <input type='password' value={Password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='ConfirmPassword'>Confirm Password : </label>
                <input type='password' value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
            < input type='submit' value='create User'></input>
        </form>
        <div>
            <h2>Form Data</h2>
            <div>
                <label>First Name:</label>{FirstName}
            </div>
            <div>
                <label>Last Name:</label>{LastName}
            </div>
            <div>
                <label>Email:</label>{Email}
            </div>
            <div>
                <label>Password:</label>{Password}
            </div>
            <div>
                <label>Confirm Password:</label>{ConfirmPassword}
            </div>
        </div>
    </div>




        

       
       
    );
    


    };


export default Form;