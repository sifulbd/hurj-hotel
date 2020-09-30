import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import {UserContext} from "../../App";
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
const Login = () => {
    const [user, setuser] = useContext(UserContext);
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
            setuser(singnedInUser);
            storeAuth();
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

    const storeAuth = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
            history.replace(from);
          }).catch(function(error) {
            // Handle error
        });
    }
    return (
        <div>
            <Container fixed>
                <h1>Login for Booking</h1>
                <button onClick={handglegoogleSingin}>SignIn with Google</button>
            </Container>
        </div>
    );
};

export default Login;