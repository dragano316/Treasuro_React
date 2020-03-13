import React,{Component} from 'react';
import Hamburger from './hamburger';
import Aux from './Aux1';
import Enter from './enter';
import {Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import Leaderboard from './leaderboard';
import Contact from './contact';
import Questions from './questions';


class App extends Component{

    // state={
    //     isLoggedIn:'Notloggedin',
    //     user:{}
    // }

    // handleLogin=(data)=>{
    //     this.setState({
    //         isLoggedIn:'LoggedIn',
    //         user:data
    //     })
    // }

    render(){
        let user= window.localStorage.getItem('player_id')

    return(
        <Aux>
        <Hamburger/>
        <Route path='/' exact component={Enter}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/leaderboard' exact component={Leaderboard}/>
        <Route path='/questions' exact component={Questions}/>
        <Route path='/contact' exact component={Contact}/>

        {/* <Route path='/login'
         exact 
         render={props=>(<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
        <Route path='/register'
         exact 
         render={props=>(<Register {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
        <Route path='/leaderboard'
         exact
         render={props=>(<Leaderboard {...props} loggedInStatus={this.state.isLoggedIn}/>)}/>
        <Route path='/contact'
         exact 
         render={props=>(<Contact {...props} loggedInStatus={this.state.isLoggedIn}/>)}/>
        <Route path='/questions'
         exact 
         render={props=>(<Questions {...props} loggedInStatus={this.state.isLoggedIn}/>)}/> */}
        </Aux>

    );    
    }

};

export default App;