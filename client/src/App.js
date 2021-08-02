import React from 'react';

import {  NavBar, Upload , About, Examples, Supported, Footer} from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <>
            <NavBar/>
            <Upload/>
            <About/>
            <Examples/>
            <Supported/>
            <Footer/>
        </>
    )
}

export default App;
