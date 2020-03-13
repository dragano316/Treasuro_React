import React,{Component} from 'react';
import './login.css';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Questions from './questions';
import Loader from './loader';


class Register extends Component{
    state={
        user_id:'',
        password:'',
        fname:'',
        lname:'',
        email:'',
        loading:false
    }
    postDataHandler=(e)=>{
        this.setState({loading:true})
        e.preventDefault()
        const registration={
            FirstName:this.state.fname,
            LastName:this.state.lname,
            Password:this.state.password,
            Email:this.state.email,
            SignupID:this.state.user_id
        }
        axios.post('http://localhost:3000/users',registration)
        .then((res)=>{
             console.log(res)
            var user_id=res.data.user._id
            window.localStorage.setItem('player_id',user_id)
            window.localStorage.setItem('player_name',res.data.user.FirstName+' '+res.data.user.LastName)
            this.props.history.push('/questions')
        })
        .catch(e=>{
            alert('User Exist!! Please register with a new ID.');
            this.props.history.push('/register')
        })

    }   
// swagger ui

    render(){
        let l=''
        if(this.setState.loading){
            l=<Loader/>
        }
    return (
        <form method="post" id="register" onSubmit={this.postDataHandler}>
            {l}
        <div className="registration">
            <p style={{textAlign: 'center'}} className="text_register">REGISTER</p>
                <div className="form_box">
                    <div className="b1">
                <input type="text" required placeholder="FIRST NAME" id="fname" className="i1" autoComplete="off" maxLength="12" onChange={(event)=>this.setState({fname:event.target.value})}/>
                <input type="text"  required placeholder="LAST NAME" id="lname" className="i1" autoComplete="off" maxLength="12" onChange={(event)=>this.setState({lname:event.target.value})}/>
            </div>
        <div className="b2">
                <input type="text" required placeholder="UNIQUE USER ID" id="uid" className="i2" autoComplete="off" onChange={(event)=>this.setState({user_id:event.target.value})}/>
            </div>
            <div className="b3">
                <input type="email" required placeholder="E-MAIL ID" id="email" className="i2" autoComplete="off" onChange={(event)=>this.setState({email:event.target.value})}/>
            </div>
            <div className="b4">
                <input type="password" required placeholder="PASSWORD" id="password" className="i2" autoComplete="off" onChange={(event)=>this.setState({password:event.target.value})}/>
                {/* {<input type="text" required placeholder="CONFIRM PASSWORD" id="cpassword" class="i1"/>} */}
            </div>
            </div>

        </div>
        <div className="b5">
            <input type="submit" value="BEGIN!"/>
        </div>
        <h1>{this.props.loggedInStatus}</h1>
    </form>


    );
    }
}

export default Register