import React from 'react'
import './TopNav.css'
import {
    Link,
} from 'react-router-dom'
class TopNav extends React.Component {
    render(){
        return(
             
                <div className="row" style={{padding:'10px', backgroundColor:'black', color:'white', borderRadius:'0px'}}>
                    <div className="col-sm-2"><Link to="/"><button onClick={(e)=>{

                        document.getElementById('userprofilebtn').style.backgroundColor="black";
                        document.getElementById('userprofilebtn').style.color="white";

                        document.getElementById('audiosbtn').style.backgroundColor="black";
                        document.getElementById('audiosbtn').style.color="white";
                    }} id="topnavlogo">SWEET CREATURE <sub></sub></button></Link></div>
                    <div className="col-sm-3"><Link to="/playfield"><button onClick={(e)=>{
                        e.target.style.backgroundColor='white';
                        e.target.style.color='black';

                        document.getElementById('userprofilebtn').style.backgroundColor="black";
                        document.getElementById('userprofilebtn').style.color="white";
                    }} id="audiosbtn" className="topnavbtn">Listen!</button></Link></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-3" align="right"><Link to="/myprofile"><button onClick={(e)=>{
                        e.target.style.backgroundColor='white';
                        e.target.style.color='black';

                        document.getElementById('audiosbtn').style.backgroundColor="black";
                        document.getElementById('audiosbtn').style.color="white";
                    }} id="userprofilebtn" className="topnavbtn">Developer Info.</button></Link></div>
                </div>
            
        )
    }
    
}
export default TopNav;

