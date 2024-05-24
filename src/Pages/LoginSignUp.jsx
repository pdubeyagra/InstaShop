import React from "react";

const LoginSignUp = () => {
  return (
    <>
      <div className="LoginSignUp">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
            <button>SignUp</button>
          </div>
          <p className="loginsignup-login">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
