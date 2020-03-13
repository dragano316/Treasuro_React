import React,{Component} from 'react';
import './questions.css';
import axios from 'axios';
class Question extends Component{

    state={
        question:'',
        score:0,
        level:0,
        attempts:0
    }

    componentDidMount(){
        console.log(this.props)
        // var id=this.props.location.search.split('=')[1]
        // if(!id){
            var id=window.localStorage.getItem('player_id')
            if(this.props.location.search && id){
                var stats=document.getElementById('stats')
                var box=document.getElementById('box')
                stats.style.display='none'
                box.style.display='none'
                const urlParams = new URLSearchParams(window.location.search);
                const myParam1 = urlParams.get('ans');
                const myParam2 = urlParams.get('level');
    
                
                
                const checking={
                    answer:myParam1,
                    level:myParam2
                }
    
                fetch(`http://localhost:3000/level?user=${id}`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(checking)
            })
            .then((res)=>{
                if(res.ok){
                    return res.json()
                }else{
                    return Promise.reject({status:res.satus,statusText:res.statusText})
                }
            })
            .then((data)=>{
                console.log(data)
                if(data.answer==="10"||data.answer==="-5"){
                    console.log('yes')
                    const ans=document.getElementById('ans')
                    window.localStorage.setItem('score',data.user.score)
                    window.localStorage.setItem('level',data.user.level)
                    window.localStorage.setItem('attempts',data.user.attempts)
                    ans.innerHTML=`${data.answer} points`
                    setTimeout(function(){
                        window.location='./questions';
                     },3000);
                }
                else if(data.answer==="0"){
                    const ans=document.getElementById('ans')
                    window.localStorage.setItem('score',data.user.score)
                    window.localStorage.setItem('level',data.user.level)
                    window.localStorage.setItem('attempts',data.user.attempts)
                    ans.innerHTML='You have used all 3 of your lucky chances'
                    setTimeout(function(){
                        window.location='/questions';
                     },3000);

                }
                else{
                const newquest=document.getElementById('newques')
                // document.getElementById('check').reset()
                window.localStorage.setItem('score',data.user.score)
                window.localStorage.setItem('level',data.user.level)
                window.localStorage.setItem('attempts',data.user.attempts)
                const level=document.getElementById('level')
                const attempts=document.getElementById('attemptsleft')
                const score=document.getElementById('score')
                level.innerHTML=window.localStorage.getItem('level')
                attempts.innerHTML=window.localStorage.getItem('attempts')
                score.innerHTML=window.localStorage.getItem('score')
                if(data.answer==="Wrong"){
                    // alert('Wrong Answer')
                    document.getElementById('ans').innerHTML='Wrong Answer!! You will be Redirected to the Dashboard.'
                    setTimeout(function(){
                        // this.props.history.push('/questions');
                        window.location='/questions';
                     }, 2000);

                    // window.location='./questions.html'
                }
                else if(data.user.attempts===0){

                    alert('You Have reached your maximum limit of attempts. Kindly Buy a new ticket to continue playing.')
                    window.localStorage.clear()
                    // this.props.history.push('/')
                    window.location='/';
                }
                else if(data.answer==="Won"){
                    document.getElementById('ans').innerHTML='Game Completed!!'
                    window.localStorage.clear()
                    setTimeout(function(){
                        window.location='/';
                     }, 2000);
                    // alert('You have successfully completed the game')
                    
                    // window.location='./index.html'
                }
                else{
                    document.getElementById('ans').innerHTML='Right Answer!! You will be Redirected to the Dashboard.'
                    setTimeout(function(){
                        // this.props.history.push('/questions');
                        window.location='/questions';
                     }, 2000);
                    // document.getElementById('box1').style.display="block"
                    // document.getElementById('box2').style.display="block"
                    // alert('Right Answer!!!')
                    // newquest.innerHTML=data.newquestion.level+' '+data.newquestion.question
                }
            }
            })
            .catch((e)=>console.log(e))
        
        }

        // }
        else if(!this.props.location.search && id){
            axios.get('http://localhost:3000/getquestions?user='+id)
        .then(res=>{
            console.log(res)
            window.localStorage.setItem('player_level',res.data.ques.level)
            window.localStorage.setItem('player_score',res.data.person.score)
            window.localStorage.setItem('player_attempts',res.data.person.attempts)
            this.setState({question:res.data.ques.question,score:res.data.person.score,level:res.data.person.level,attempts:res.data.person.attempts})
        })
        .catch(e=>{
            alert('Some Error Occured!!')
            this.props.history.push('/')
        })
    }
    else{
        this.props.history.push('/')
    }
    }

 
    render(){
    return (
        <div>
            <div style={{textAlign:'center',color:'white',fontSize:'20px'}} id="ans"></div>
        <div className="currentpos" id="stats">
            <div className="pos">
                <p>Your Current Level:</p>
    <div id="level">{this.state.level}</div>
            </div>
            <div className="pos">
                <p>Your Current Points:</p>
    <div id="score">{this.state.score}</div>
            </div>
            <div className="pos">
                <p>Attempts Left For This Question:</p>
    <div id="attemptsleft">{this.state.attempts}</div>
            </div>

        </div>
    <div className="questionboxxx" id="box">
            <p style={{padding: '5px'}}>Question</p>
            <div id="newques">
{this.state.question}
            </div>
    </div>
    {/* <form method="post" id="check" onSubmit={this.answerCheckingHandler}>
    <div className="answer_box">
        <input type="text" placeholder="YOUR ANSWER" id="answer" autoComplete="off"/>
    </div>

    <div className="click">
        <input type="submit" value="SUBMIT"/>

    </div> */}
{/* </form> */}
{/* <h1>{this.props.loggedInStatus}</h1> */}
        
</div>
    );
    }
}

export default Question;