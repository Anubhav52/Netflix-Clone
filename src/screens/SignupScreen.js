import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./SignupScreen.css";

 function SignupScreen() {
   
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

//   const register = (e) => {
//     e.preventDefault();

//     const auth = getAuth();
//       createUserWithEmailAndPassword(
//           auth,
//           emailRef.current.value, // passing the emial and pwd input by user to thr fxn to create an account.
//           passwordRef.current.value
//         )
//         .then((authUser) => {
//           console.log(authUser);
//         })
//         .catch((error) => {
//           alert(error.message);
//         });
//   };

//   const signIn = (e) => {
//     e.preventDefault();
  
//     const auth = getAuth();
//       signInWithEmailAndPassword(
//           auth,
//           emailRef.current.value, 
//           passwordRef.current.value
//         )
//         .then((authUser) => {
//           console.log(authUser);
//         })
//         .catch((error) => {
//           alert(error.message);
//         });  
//   };

  return (
        <div className="signupScreen">
          <div className="signupScreen_background">
            <img
              className="signupScreen_logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />

          </div>
          <div className="signupScreen_gradient" />
          <div className="signupScreen_body">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email or phone number" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <Link to="/browse">
                <button type="submit" id="signinbtn" /*onClick={signIn}*/>Sign In</button>
                </Link>
                <h4>New to Netflix ? <span className="signuplink" /*onClick={register}*/>Sign up now.</span></h4>
            </form>
          </div>
          
        </div>
  );
}

export default SignupScreen;
