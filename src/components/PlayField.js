import React from 'react'
import TopNav from './TopNav'
import './PlayField.css'
import MountAndPlay from './MountAndPlay'
import YoutubeAudio from './YoutubeAudio'
import OurLibrary from './OurLibrary'
{/*
<TopNav>
<3 buttons yt own mountnPlay> onClick-> style.display = none/block >
< for each of the three buttons -> a seperate component > 
*/}

class PlayField extends React.Component {
    render(){
        return(
             
                <div className="conainer">
                <div className="row">
                    
                    <div className="col-sm-12" style={{
                    padding:'10px', 
                    backgroundColor:'transparent', 
                    borderBottom:'0px solid black', 
                    
                    }}>
                    <table>
                        <tr>
                            <td style={{paddingRight:'15px'}}>
                            <button id="ytbtn" style={{
                        
                        color:'white',
                        backgroundColor:'black',
                        borderRadius:'5px',
                        border:'1px solid black',
                       
                        }}  onClick={(e)=>{
                            e.target.style.color='white';
                            e.target.style.backgroundColor='black';
                           
                            
                            document.getElementById("olbtn").style.color='black';
                            document.getElementById("olbtn").style.backgroundColor='white';
                            document.getElementById("mountbtn").style.color='black';
                            document.getElementById("mountbtn").style.backgroundColor='white';
                            
                            document.getElementById('yt').style.display='block';
                            document.getElementById('ol').style.display='none';
                            document.getElementById('mount').style.display='none';
                        }}> Search Audiobooks</button>
                            </td>

                            <td style={{paddingRight:'15px'}}>
                            <button id="olbtn" style={{
                       
                        color:'black',
                        backgroundColor:'transparent',
                        borderRadius:'5px',
                        border:'1px solid black',
                        
                        }} onClick={(e)=>{
                            e.target.style.color='white';
                            e.target.style.backgroundColor='black';
                            
                            document.getElementById("ytbtn").style.color='black';
                            document.getElementById("ytbtn").style.backgroundColor='white';
                            document.getElementById("mountbtn").style.color='black';
                            document.getElementById("mountbtn").style.backgroundColor='white';
                           
                            document.getElementById('yt').style.display='none';
                            document.getElementById('ol').style.display='block';
                            document.getElementById('mount').style.display='none';
                        }}>Library</button>
                            </td>

                            <td style={{paddingRight:'15px'}}>
                            <button id="mountbtn" style={{
                       
                        color:'inherit',
                        backgroundColor:'transparent',
                        borderRadius:'5px',
                        border:'1px solid black',
                        
                        }} onClick={(e)=>{
                            e.target.style.color='white';
                            e.target.style.backgroundColor='black';
                            
                            document.getElementById("olbtn").style.color='black';
                            document.getElementById("olbtn").style.backgroundColor='white';
                            document.getElementById("ytbtn").style.color='black';
                            document.getElementById("ytbtn").style.backgroundColor='white';
                             
                            document.getElementById('yt').style.display='none';
                            document.getElementById('ol').style.display='none';
                            document.getElementById('mount').style.display='block';
                        }}>My bookshelf</button>
                            </td>
                        </tr>
                    </table>
                    </div>
                    

                     
                    {/*playfield*/}
                    <YoutubeAudio/>
                    <OurLibrary/>
                    <MountAndPlay/>
                    </div>
                    </div>
                   



                  
                
            
        )
    }
}

export default PlayField;