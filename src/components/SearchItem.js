import React from 'react'
import './SearchItem.css'
import axios from 'axios'
import YoutubeAudio from './YoutubeAudio'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'
import ReadRoom from './ReadRoom';

class SearchItem extends React.Component {

 
    render(){
        {/* 
        props:
        cover,
        title,
        uploadedBy(channel),
    */}

    var ifrm = `<h6>Audiobook</h6><div style="background-color:black;padding:10px;"><p style="font-size:14px;border-radius:5px;background-color:black;color:white;border:1px solid black;"><span style="color:rgb(52, 201, 52)"> Playing: </span>` + this.props.title + `</p>`+
    `<iframe id="` + `embed${this.props.id}` +`" style="width:100%;"`+
     `src="` + `https://www.youtube.com/embed/${this.props.id}?vq=small&cc_lang_pref=an&cc_load_policy=1&autoplay=1` + `" `+
     `frameborder='0' `+
     `allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'`+
     `allowfullscreen></iframe></div>`

        return(
            <div className="container-fluid" style={{margin:'0px'}}>
            <a style={{textDecoration:'none', color:'black', margin:'0px', padding:'0px'}} id={this.props.id} className="container" href={`#${this.props.cover}`}>
            <div className="row searchitem" align="center" onClick={(e)=>{

               document.getElementById(`searchitem${this.props.id}`).style.backgroundColor='black';
               document.getElementById(`searchitem${this.props.id}`).style.color='white';
            
               document.getElementById(`${this.props.cover}`).style.display = 'block';
               document.getElementById(`view${this.props.id}`).innerHTML= ifrm;
               
            }} id={`searchitem${this.props.id}`} style={{backgroundColor:'white', color:'black',borderRadius:'5px', padding:'0px', marginBottom:'0px'}}>
                <div className="col-sm-2"><img src={this.props.cover} style={{width:'40%', backgroundColor:'white', border:'0px solid black', borderRadius:'0px',padding:'3px'}}></img></div>
                <div className="col-sm-6" align="left" style={{paddingTop:'5px'}}><span style={{color:'rgb(52, 201, 52)'}}>Title:  </span>{this.props.title}</div>
                <div className="col-sm-1" style={{paddingTop:'5px'}}></div>
                <div className="col-sm-3" align="left" style={{paddingTop:'5px'}}><span style={{color:'rgb(52, 201, 52)'}}>From: </span>{this.props.uploadedBy}</div>
            </div>
            </a>

            <div id={`${this.props.cover}`} style={{height:'100vh', paddingTop:'5px', border:'0px solid black', display:'none'}}>
                <a align="right" href={`#${this.props.id}`}><button id="closebook" onClick={()=>{
                    document.getElementById(`view${this.props.id}`).innerHTML = 'Loading ...';
                    document.getElementById(`${this.props.cover}`).style.display = 'none';
                    document.getElementById(`searchitem${this.props.id}`).style.backgroundColor='white';
                    document.getElementById(`searchitem${this.props.id}`).style.color='black';
                    
                }}>Close this audiobook</button></a><br/><br/>
            <ReadRoom cover={this.props.cover} title={this.props.title} id={this.props.id} />
            </div>
         

              <hr/> 
               </div>
              
            
        )
    }
     
}
export default SearchItem;