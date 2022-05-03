import React from 'react';
import "./Signup.css"

const Signup = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="signup-area" onSubmit={handleSubmit}>
        <div className="signup">Please Sign Up</div> <br />
        <form className="Signup-form" >
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder=" Enter Password"  /> <br />
            
            <button>Signup</button>
           

            <p>Have a account? <b>Sign-in</b> </p>
            
        </form>

    </div>
    );
};

export default Signup;