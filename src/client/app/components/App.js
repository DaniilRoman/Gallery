import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const App = () => (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;