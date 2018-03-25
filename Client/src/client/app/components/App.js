import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// import 'bootstrap'; 

const App = () => (
    <div className="container">
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;