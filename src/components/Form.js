import React, {useState} from 'react';


const Form = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [FirstNameError, setFirstNameError] = useState("");
    
    const [LastName, setLastName] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    
    const [Email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
   
    const [Password, setPassword] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName =(e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName =(e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters long");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail =(e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long");
        } else {
            setEmailError("");
        }

    }

    const handlePassword =(e) => {
        setPassword(e.target.value);
        if(e.target.value.lenght > 8){
            setPasswordError("Password must be less than 8 characters long");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword =(e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== Password){
            setConfirmPasswordError("Passwords must match");
        }else{
            setConfirmPasswordError("");
        }
    }



    const createUser = (e) => {
        e.preventDefault();


        const NewUser = {FirstName, LastName, Email, Password, ConfirmPassword};
        console.log(NewUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted(true);

    };

   

    return (
        <div>
        <form onSubmit={createUser} >
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form</h3> :
                <h3>Welcome, Please submit the form !</h3>
            }
            <div>
                <label htmlFor='FirstName'>First Name: </label>
                <input type='text' value={FirstName} onChange={handleFirstName}></input>
                <p>{FirstNameError}</p>
            </div>
            <div>
                <label htmlFor='LastName'>Last Name: </label>
                <input type='text' value={LastName} onChange={handleLastName}></input>
                <p>{LastNameError}</p>
            </div>
            <div>
                <label htmlFor='Email'>Email : </label>
                <input type='text' value={Email} onChange={handleEmail}></input>
                <p>{EmailError}</p>
            </div>
            <div>
                <label htmlFor='Password'>Password : </label>
                <input type='password' value={Password} onChange={handlePassword}></input>
                <p>{PasswordError}</p>
            </div>
            <div>
                <label htmlFor='ConfirmPassword'>Confirm Password : </label>
                <input type='password' value={ConfirmPassword} onChange={handleConfirmPassword}></input>
                <p>{ConfirmPasswordError}</p>
            </div>
            {/* disable button if all validations are not met  */}
            <button disabled={FirstNameError.length > 0 || LastNameError.length > 0 || EmailError.length > 0 || PasswordError.length > 0 || ConfirmPasswordError.length > 0}>Submit</button>
                {/* < input type='submit' value='create User'></input> */}
            


            
            
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