import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Category from './components/Category/Category';

export const UserContext = createContext();

export const CatergoryContent = createContext();

function App() {
  const [logggedInUser, setLoggedInUser] = useState({});
  const [count, setCount] = useState(1);
  const[category, setCategory] = useState('single');
  return (
    <UserContext.Provider value={[logggedInUser, setLoggedInUser]}> 
    <CatergoryContent.Provider value={[category, setCategory]}>
      <p>Name: {logggedInUser.name}</p>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
              <Category></Category>
              <CategoryDetails></CategoryDetails>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <Route exact path="/">
              <Home />

            </Route>
          </Switch>
      </Router>
    </CatergoryContent.Provider>
    </UserContext.Provider>
  );
}

export default App;
