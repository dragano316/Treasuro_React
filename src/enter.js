import React from 'react';
import logo from './logo.png';
import './style.css';
import {Link} from 'react-router-dom';
import Aux from './Aux1';





const enter=()=>{
    return(
        <Aux>
            <div  className="homebox">
                <p className="heading"><img src={logo} style={{width: '100%'}} alt="logo"/></p>
                <div className="innerbox">
                {/* <a href="/login" className="login">Login</a> */}
                {/* <a href="/register" className="register"><span>Register</span></a> */}
                <Link to="/login" className="login">Login</Link>
                <Link to="/register" className="register">Register</Link>
            </div>
            <Link to="/leaderboard" className="dashboard" id="dashboard">Leaderboard</Link>
        </div>
         {/* <Route path="/login" exact component={Login}></Route>  */}
        {/* <Route path="/register" exact component={Register}></Route> */}
        </Aux>
    );
}


export default enter;