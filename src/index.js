import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import {BrowserRouter} from 'react-router-dom';



const APP= () =>{
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>

    );
};

ReactDOM.render(<APP/>,document.querySelector('#root'));