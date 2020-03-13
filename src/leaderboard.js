import React, { Component } from 'react';
import './leaderboard.css';
import axios from 'axios';
import Member from './individualmember';
class Leaderboard extends Component{

    state={
        members:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3000/leaderboard')
        .then(response=>{
            this.setState({members:response.data})
            console.log(response)
        })
        .catch(e=>{
            alert('Some Error Occured!!')
            this.props.history.push('/')
        })
    }
    
    render(){
        const members=this.state.members.map((member,index)=>{
        index=index+1;
        if(member._id===window.localStorage.getItem('player_id')){
            window.localStorage.setItem('player_position',index)
        }
        return <Member fname={member.FirstName} index={index} lname={member.LastName} score={member.score} key={member._id}/>
        })

        let personalstats=''
        if(window.localStorage.getItem('player_id') && (window.localStorage.getItem('player_name'))){
            personalstats=(
                <div className="currentpos" id="current">
                <div className="pos">
                    <p>Your Current Position:</p>
            <p id="position">{window.localStorage.getItem('player_position')}</p>
                </div>
                <div className="points">
                    <p>Your current points</p>
            <p id="points">{window.localStorage.getItem('player_score')}</p>
                </div>
            </div>
            )
        }
    return (
        <div>
            {personalstats}
        <div className="leaderboard">
            <p className="dash">DASHBOARD</p>
            <div className="scorers" id="scorers">
                {members}
            </div>
        </div>
        </div>
    );
    }
}

export default Leaderboard;