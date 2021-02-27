import React from 'react'

class Home extends React.Component {
    render(){
        return(
             
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-sm-7">
                          <div className="row" align="left">
                              
                              <div className="col-sm-12" style={{marginTop:'20px',padding:'20px', border:'1px solid rgb(49, 116, 240)', backgroundColor:'white', color:'rgb(49, 116, 240)'}}>
                                  <h4>What is it!</h4>
                                A place to make notes and search dictionary while you listen to an audiobook.
                                <br/>
                                <br/>
                                <ul>
                                    <li>
                                    Click on the [Listen!] button in the navigation bar
                                    </li>
                                    <li>
                                    Search for the audiobook you want to consume 
                                    </li>
                                </ul>
                                  
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-5"></div>
                  </div>
              </div>
            
        )
    }
    
}
export default Home;