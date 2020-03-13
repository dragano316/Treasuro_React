import React,{Component} from 'react';
import './contact.css';
import axios from 'axios';
class Contact extends Component{

    state={
        comments:''
    }

    submitComment=(e)=>{
        e.preventDefault()
        const com={
            comment:this.state.comments
        }
        axios.post('http://localhost:3000/contact',com)
        .then(response=>{
            alert('You have Successfully Submitted Your Query!!')
            this.props.history.push('/')
        })
        .catch(e=>{
            alert('Some Error Occurred!!')
            this.props.history.push('/')
        })
    }



    render(){
    return (
        <div className="contact">
            <h1>CONTACT US:</h1>
            <p className="infos"><span className="info">Call :: </span><a href="tel:8586037956" style={{textDecoration: 'underline', color: '#fff'}}>8586037956</a></p>
            <p className="infos"><span className="info">FACEBOOK :: </span>facebook/jssmmil</p>
            <p className="infos"><span className="info">INSTAGRAM :: </span>insta/jssmmil</p>
        <form id="contact" method="post" onSubmit={this.submitComment}>
            <h3 style={{padding:'5px'}}>Have Suggestions? Let us Know!!</h3>
            <textarea className="text" id="comment" placeholder="Type Here" onChange={event=>this.setState({comments:event.target.value})}></textarea>
            <div  className="send">
                <input type="submit" value="SEND"/>
             </div>
        </form>
        </div>
    );
    }
}

export default Contact;