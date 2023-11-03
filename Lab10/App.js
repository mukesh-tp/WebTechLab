import React, { useState } from 'react';
import "./App.css";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showPasswordPage, setShowPasswordPage] = useState(false);

  const handleNextClick = () => {
    // Add any necessary logic here before navigating
    // For example, you can check the username and proceed accordingly
    setShowSignIn(false);
    setShowPasswordPage(true);
  };

  return (
    <div className="App">
      {showSignIn && (
        <div className="logo-box">
          <img src="./twitter.png" alt="apple" className="logo" />
          <h2 className="left">Sign In to X</h2>
          <button>
            <img src="./google.png" alt="apple" />
            Sign in with Google
          </button>
          <button>
            <img src="./apple.png" alt="apple" />
            <b>Sign in with Apple</b>
          </button>
          <hr></hr>
          <span>or</span>
          <br></br>
          <form>
            <input type="text" placeholder="Phone, email, or username" />
            <button onClick={handleNextClick}>
              <b>Next</b>
            </button>
          </form>
          <button><b>Forgot Password?</b></button>
          <p className="left">
            Don't Have an account? <a className='linker'>Sign up</a>
          </p>
        </div>
      )}

{showPasswordPage && (
  <div className="logo-box">
    <img src="./twitter.png" alt="apple" className="logo" />
    <h2 className="left">Enter Your Password</h2>
    <form>
      <div className="password-input">
        <input type="password" placeholder="Password" />
      </div>
      <a className="small-font linker" style={{ float: 'left' }}>Forgot password?</a>
      <button style={{ margin: '5em 0' }}>
        <b>Log In</b>
      </button>
    </form>
  </div>
)}
    </div>
  );
}

export default App;
