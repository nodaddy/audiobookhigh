import React from 'react'
import './OurLibrary.css'

class Profile extends React.Component {
    render(){
        return(
             <div className="container-fluid" style={{padding:'20px'}} align="right">
                 <div className="col-sm-12">
                  
                    <h5>Neelesh Sharma</h5>
                    Bachelor of Technology, <br/>
                    Production and Industrial Engineering(Mechanical and Industrial Department),<br/>
                    IIT Roorkee, Uttarakhand, India<br/><br/>
                    <h5>Contact Details:</h5>
                    +91 9870938860 <br/>
                    <a href="https://www.linkedin.com/in/neelesh-sharma-6178971aa/">My linkedIn profile</a>
                 </div>
             </div>
        )
    }
    
}
export default Profile;
