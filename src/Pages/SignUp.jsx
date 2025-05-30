import React from 'react';
const SignUp = () => {
  return (
    <div className="container-signup">
      <h1 className="signup-logo">Estate</h1>

      <div className="signup-header">
        <p className="signup-welcome">Welcome!</p>
        <p className="signup-subtext">Please enter your account details</p>
      </div>

      <div className="signup-form">
        <label>Email</label>
        <input type="email" placeholder="abc@gmail.com" />

        <label>Password</label>
        <input type="password" placeholder="your password" />
      </div>

      <div className="signup-actions">
        <button className="signup-btn">Sign Up</button>
        <div className="signup-divider">or</div>
        <button className="google-signup-btn">Sign up with Google</button>
      </div>
    </div>
  );
};

export default SignUp;
