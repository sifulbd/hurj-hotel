import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import {UserContext} from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [logggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handglegoogleSingin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const{displayName, email} = result.user;
            const singnedInUser = {name: displayName, email}
            setLoggedInUser(singnedInUser);
            history.replace(from);
            // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handglegoogleSingin}>SignIn with Google</button>
        </div>
    );
};

export default Login;