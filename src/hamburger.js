import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './style.css';
// import './loader.css';
// import axios from 'axios';
import Aux from './Aux1';
class hamburger extends Component{

    state={
        showMenu:false,
        play:false,
        pause:true
    }

    openingHandler=()=>{
        const doesShow=this.state.showMenu
        this.setState({showMenu:!doesShow})
    }

    loggingoutHandler=()=>{
        window.localStorage.clear()
        this.openingHandler()
        this.props.history.push('/')
    }

    // play=()=>{
    //     var audio = document.getElementById("audio");
    //     window.localStorage.setItem('player_song',"true")
    //     audio.loop=true
    //     audio.play();
    // }
    
    
    // stopPlay=()=>{
    //         var audio = document.getElementById("audio");
    //         window.localStorage.removeItem('player_song')
    //         audio.pause()
    //         audio.currentTime=0
    // }

    // document.getElementById('box').addEventListener('click',(event)=>{
    //     if(document.getElementById('sound').checked==true){
    //         // play()
    //         // console.log(event.target)
    //         stopPlay()
    //         // console.log('yes')
    //     }
    //     else{
    //         // console.log(event.target)
    
    //         play()
    //     }  
    // })

    // soundHandler=(e)=>{
        // console.log('1')
        // const doesPlay=this.state.play
        // const doesPause=this.state.pause
            // this.setState({
            //   play: !doesPlay,
            //   pause: !doesPause
            // });
            // let audio = new Audio('./final.mp3');
            // var audio = document.getElementById("audio");

            // window.localStorage.removeItem('player_song')
            // const playPromise=audio.play()
            // var playPromise = player.play();

    //   if (playPromise !== undefined) {
        // playPromise
        //   .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            // console.log("audio played auto");
        //   })
        //   .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            // console.log(error);
        //   });
    //   }
            // audio.currentTime=0
            // console.log(e.target);
            // this.audio.play();
            // console.log('true')
        //   pause(){
        //   this.setState({ play: false, pause: true });
        //     this.audio.pause();
        //   }
    // }
    render(){
        let logout=''
        let question=''
        let name=''
        let home=<Link to="/" onClick={this.openingHandler}>HOME</Link>
        if(window.localStorage.getItem('player_id') && (window.localStorage.getItem('player_name'))){
            logout=(
                <div className="logout" id="loggingout"  onClick={this.loggingoutHandler}>LOGOUT</div>
            )
            home=''
            question=(
                <Link to="/questions" id="showquestions"  onClick={this.openingHandler}>QUESTIONS</Link>
            )
            name=window.localStorage.getItem('player_name')
        }

        let sidemenu=null;
        if(this.state.showMenu){
            sidemenu=(
                <div id="mySidenav" className={this.state.showMenu ? 'sidenav increasesidenav':'sidenav'}>
            <span className="closebtn" onClick={this.openingHandler}>&times;</span>
            <p id="naming">{name}</p>
            {home}
            {/* <Link to="/" onClick={this.openingHandler}>HOME</Link> */}
            <Link to="/leaderboard"  onClick={this.openingHandler}>LEADERBOARD</Link>
            {/* <span style={{width: '50%'}}>SOUND</span> */}
            {/* <label className="switch" id="sound" > */}
                {/* <input type="checkbox" id="box" onClick={this.soundHandler}/> */}
                {/* <span className="slider round"></span> */}
            {/* </label> */}
            {/* <audio id="audio" src="./final.mp3"></audio> */}
            <Link to="/contact"  onClick={this.openingHandler}>CONTACT</Link>
            {question}
            <div className="mmil">
                POWERERED BY MMIL
            </div>
            {logout}
          </div>
            );
        }

    return (
        <Aux>
        <span style={{fontSize:'30px',cursor:'pointer',padding: '10px', color: '#fff'}} onClick={this.openingHandler}  className="opener">&#9781;</span>
        {sidemenu}
          </Aux>

    );
    }

}

export default withRouter(hamburger);