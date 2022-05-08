import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {Routes} from "react-router-dom";
import Home from '../components/Home/Home';




const Router = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        
    );
};

export default Router;