import React from 'react'

class Home extends React.Component {
    render(){
        return(
             
              <div className="container-fluid">
                  <h5 align="center" style={{backgroundColor:'white', color:'rgb(49, 116, 240)', paddingTop:'100px'}}>
                    Welcome! 
                  </h5>  
                  {/* <div className="row">
                      <div className="col-sm-7">
                          <div className="row" align="left">
                              
                              <div className="col-sm-12" style={{marginTop:'20px',padding:'20px', backgroundColor:'white', color:'rgb(49, 116, 240)'}}>
                                  <h4>Welcome</h4>
                                A place to make notes and search dictionary while you listen to an audiobook.
                                <br/>
                                <br/>
                                <ul>
                                    <li>
                                     Have a nice fkn' time!
                                    </li> 
                                </ul>
                                  
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-5"></div>
                  </div> */}
              </div>
            
        )
    }
    
}
export default Home;