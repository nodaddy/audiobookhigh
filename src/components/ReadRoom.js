import React, { Component } from 'react'
import './ReadRoom.css'
import axios from 'axios'
 
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { black } from 'color-name';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class ReadRoom extends React.Component {

    state={
        dictioanryRes: [],
        showDicRes: false,
        oneElementArray:[1]
    }

    render(){
        return(
            <div className='col-sm-12' style={{height:'100vh'}}>
                 <div className="row">
                     <div className="col-sm-12">
                     <h6>Dictionary</h6>
                     <div className="row" style={{marginBottom:'10px'}}>
                         <div className="col-sm-3">
                     <input align="center"  id={`englishword${this.props.id}`} style={{ marginBottom:'10px',padding:'7px',width:'100%',border:'0px', backgroundColor:'black', color:'white'}}>
                         
                         </input><br/>
                         <button style={{border:'1px solid black', borderRadius:'5px'}} onClick={()=>{
                    document.getElementById(`nounload${this.props.id}`).style.display = 'block'; 
                 
                     document.getElementById(`dictionary${this.props.id}`).style.display='block';
                     
                  axios.get(`https://api.dictionaryapi.dev/api/v1/entries/en/${document.getElementById(`englishword${this.props.id}`).value}`)
                    .then(response => {
                      
                        this.setState({showDicRes:true, dictioanryRes:response});
                        //console.log(this.state.showDicRes);
                      //  console.log(JSON.stringify(this.state.dictioanryRes.data[0].meaning, null, "\t"));
                       // this.setState({showDicRes:true});
                    })
                    .catch(err => {
                        console.log(err);
                        alert('sorry! could not find the word');
                      document.getElementById(`nounload${this.props.id}`).style.display = 'none'; 
                     document.getElementById(`dictionary${this.props.id}`).style.display='none';
                    });
                }}>Search Word</button>
               </div>
               
               <div className="col-sm-3">
                   <div className="row">
                </div>

                </div>
                <div className="col-sm-1"><span align="center" style={{
                                    display:'none',
                                   
                                    border: '5px solid #f3f3f3', /* Light grey */
                                    borderTop:' 5px solid #0c0c0c', /* Blue */
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '35px',
                                    animation:'spin 2s linear infinite',
                                   
                                  
                                }} id={`nounload${this.props.id}`}></span></div>
                <div className="col-sm-2">
                <a align="right" href={`#${this.props.id}`}><button style={{color:'black', backgroundColor:'white'}} id="closebook" onClick={()=>{
                    document.getElementById(`view${this.props.id}`).innerHTML = 'Loading ...';
                    document.getElementById(`${this.props.cover}`).style.display = 'none';
                    document.getElementById(`searchitem${this.props.id}`).style.backgroundColor='white';
                    document.getElementById(`searchitem${this.props.id}`).style.color='black';
                    
                }}>X</button></a>

                </div>
                <div className="col-sm-3">
                <button style={{backgroundColor:'black',color:'white'}} onClick={()=>{
                        var date = new Date();
                        var localeDate = date.toLocaleDateString();
                     var note = {
                         content:[
                                {
                                    text:document.getElementById(`notetitle${this.props.id}`).value,
                                    fontSize:20,
                                    bold:true 
                                },
                                localeDate
                                ,
                                " ",
                                document.getElementById(`notetextarea${this.props.id}`).value
                         ]
                     }
                     pdfMake.createPdf(note).download();
                     console.log(document.getElementById(`notetextarea${this.props.id}`).value);
                    }}>Download notes</button>
                    
                </div>
                </div>
                <div className="row" align="left" id={`dictionary${this.props.id}`} 
                style={{zIndex:'999999',
                backgroundColor:'white',
                position:'absolute',
                padding:'3px',
                width:'100%',
                height:'70vh',
                border:'1px solid black', 
                borderRadius:'5px', 
                fontSize:'11px',
                display:'none',
                overflow:'scroll'}}>
                <button className="closedict" style={{border:'1px solid black'}} onClick={()=>{
                        document.getElementById(`dictionary${this.props.id}`).style.display='none';
                        this.setState({showDicRes:false});
                    }}> Close dictionary</button>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12" align="center">

                                <div align="left">
                                Meaning in JSON format
                                
                               
                                {   
                                    this.state.showDicRes == true ?
                                    this.state.dictioanryRes.data[0].meaning?
                                    <div style={{whiteSpace:'pre-wrap'}}>{this.state.oneElementArray.map((l)=>{
                                    document.getElementById(`nounload${this.props.id}`).style.display = 'none';
                                    return <div>{JSON.stringify(this.state.dictioanryRes.data[0].meaning, null, "\t")}</div> 
                                })}</div>
                        :this.state.oneElementArray.map((verb, index)=>{
                                    document.getElementById(`nounload${this.props.id}`).style.display = 'none'; 
                     
                                    return <div style={{fontSize:'12px'}}>Not a noun</div>
                                }):<div> {/*dictionary laoder animation*/}</div>}
                             </div>
                            </div>
                        </div>
          
                    </div>
                    
                    </div>
                     </div>
                 </div>
                 
                  <div className="row" style={{height:'auto'}}>   
                <div className="col-sm-3" id={`view${this.props.id}`}>
<br/>            
               
                 

                    
                    
                   
                </div>
                
              

                <div className="col-sm-9" id="notes" style={{height:'auto',border:'1px solid black', borderRadius:'5px'}}>
                    <div className="row" style={{paddingLeft:'10px'}}>Notes</div>
                    <div className="row">
                        <div className="col-sm-12">
                <div className="row">
                <input type="text" className="textareas" id={`notetitle${this.props.id}`}  
                   placeholder="Title of notes"></input>
                   </div>
                   <div className="row">
                    <textarea className="textareas" id={`notetextarea${this.props.id}`} style={{height:'50vh', width:'100%'}} 
                    onChange={()=>{
                        //save notes in the data base
                    }}
                    placeholder="Make notes"></textarea>
                    </div>
                </div>
                </div>
              
                </div>
                </div>
 
            </div>
        )
    }

   





}

export default ReadRoom;