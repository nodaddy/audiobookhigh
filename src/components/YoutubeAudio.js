import React from 'react'
import './YoutubeAudio.css'
import axios from 'axios'
import SearchItem from './SearchItem';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'
import ReadRoom from './ReadRoom';


class YoutubeAudio extends React.Component {

    state = {
        searchResults:[],
        showResults:false,
        startLoading:false,
        currentAudioTitle:'Audio',
        currentAudioId:'id',
        currentQuery : "audiobook",

    }



    render(){
        return(
            <Router>
               <div className="container-fluid" id="yt" style={{padding:'10px', paddingTop:'20px'}}>
              <div className="container">
               
                   <div className="row">
                        <div className="col-sm-8">
                         
                            <input onKeyDown={(e)=>{
                                if(e.key=='Enter'){
                     // document.getElementById('searchbox').value = `Showing search Results for ${this.state.currentQuery}`;
                              if(document.getElementById('searchbox').value) {this.setState({currentQuery:document.getElementById('searchbox').value});}
                             // document.getElementById('searchbox').value = `Showing search Results for ${this.state.currentQuery}`;
                          document.getElementById('searchloader').style.display = 'block'; 
                           var key1 = 'AIzaSyAlMPKiEVfFTzM5USlPOBWGALrKq8n7PFg';
                           var key2 = 'AIzaSyDbFRSu_mnSfK3sUBm5nBrNx09jdxjyiTo';
                           var key3 = 'AIzaSyBAqZUlLZhjd6-XsAC_G8VZl8CMjlUg5EQ';
                           //you can make a key per project on google
                        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${key2}&type=video&q=${document.getElementById('searchbox').value +" audiobook"}`, {}).
                        then((res)=>{
                            this.setState({searchResults:res.data.items});
                            console.log(this.state.searchResults[0]);
                            this.setState({showResults:true});

                        }).catch(()=>{

                        })
                    }
                       }} id="searchbox" placeholder="Search audiobooks" style={{
                            border:'1px solid black',
                            backgroundColor:'black',
                            padding:'5px',
                            width:'100%',
                            borderRadius:'5px',
                            paddingLeft:'10px',
                            color:'white'}}></input>
                        </div>
                   
                    <div className="col-sm-1" align="center"><span align="center" style={{display:'none'}} id="searchloader"></span></div>
                   <div className="col-sm-3">
                       <Link to="/playfield/search">
                           <button onClick={(e)=>{
                              
                              if(document.getElementById('searchbox').value) {this.setState({currentQuery:document.getElementById('searchbox').value});}
                         //     document.getElementById('searchbox').value = `Showing search Results for ${this.state.currentQuery}`;
                          document.getElementById('searchloader').style.display = 'block'; 
                           var key1 = 'AIzaSyAlMPKiEVfFTzM5USlPOBWGALrKq8n7PFg';
                           var key2 = 'AIzaSyDbFRSu_mnSfK3sUBm5nBrNx09jdxjyiTo';
                           var key3 = 'AIzaSyBAqZUlLZhjd6-XsAC_G8VZl8CMjlUg5EQ';
                           //you can make a key per project on google
                        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=${key1}&type=video&q=${document.getElementById('searchbox').value +" audiobook"}`, {}).
                        then((res)=>{
                            this.setState({searchResults:res.data.items});
                            console.log(this.state.searchResults[0]);
                            this.setState({showResults:true});

                        }).catch(()=>{

                        })
                       }}>Search</button>
                       </Link>
                   </div>
                   </div>
                   </div>
                 
                   <hr/> 

                   <Switch>
                       <Route path="/playfield/readroom">
                           <ReadRoom title={"vf"} cover={"ff"} id={"re"}/>
                       </Route>
                       <Route path="/playfield/search">
                
                       {
                            this.state.showResults == true ? 
                            <div id="searchhead" align="center" className="container">Showing results for <span style={{backgroundColor:'rgb(52, 201, 52)', padding:'5px'}}>{this.state.currentQuery}</span><hr/><br/></div>:<div></div>
                        }
                  
                        {
                            this.state.showResults == true ? 
                            <div>
                                {
                                    this.state.searchResults.map((item)=>{
                                    document.getElementById('searchloader').style.display = 'none';
                                    return  <SearchItem title={item.snippet.title} 
                                    cover={item.snippet.thumbnails.default.url} 
                                    uploadedBy={item.snippet.channelTitle} id={item.id.videoId}></SearchItem>
                               
                                })
                                }
                            </div>:<div align="center">Search Results shall be shown here</div>
                        }
                        </Route>
                        </Switch>
                 </div>
            
               </Router>
            
        )
    }

     
}
export default YoutubeAudio;