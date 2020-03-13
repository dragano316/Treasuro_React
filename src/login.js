import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import axios from 'axios';

class Login extends Component{
    state={
        user_id:'',
        password:''
    }


    postLogin=(e)=>{
        e.preventDefault()

        var info={
            SignupID:this.state.user_id,
            Password:this.state.password
        }

        console.log(info)
        axios.post('http://localhost:3000/users/login',info)
        .then((res)=>{
            console.log(res)
            var user_id=res.data.user._id
            window.localStorage.setItem('player_id',user_id)
            window.localStorage.setItem('player_name',res.data.user.FirstName+' '+res.data.user.LastName)
            this.props.history.push('/questions')
        })
        .catch(e=>{
            alert('Invalid Credentials!!')
            this.props.history.push('/login')
        })
    }

    render(){
    return (
        <form method="post" id="login" onSubmit={this.postLogin}>
        <div className="registration">
            <p style={{textAlign: 'center'}} className="text_register">LOGIN</p>
                <div className="form_box">
        <div className="b2">
                <input type="text" required placeholder="USER ID" id="uid" className="i2" autoComplete="off" onChange={(event)=>this.setState({user_id:event.target.value})}/>
            </div>
            <div className="b3">
                <input type="password" required placeholder="PASSWORD" id="password" className="i2" autoComplete="off" onChange={(event)=>this.setState({password:event.target.value})}/>
            </div>
            </div>

        </div>
        <div className="b5">
            <input type="submit" value="RESUME!"/>
        </div>
        <div className="not_logged">
        <p>NOT STARTED YET?</p>
        <Link to="/register" style={{color: '#fff',textDecoration: 'none'}}><div className="gotor" >REGISTER</div></Link>
    <h1>{this.props.loggedInStatus}</h1>
    </div>
    </form>
    );
    }
}

export default Login;