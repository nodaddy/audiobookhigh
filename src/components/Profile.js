import React from 'react'
import './OurLibrary.css'

class Profile extends React.Component {
    render(){
        return(
             <div className="container" align="center">
                 <div className="col-sm-12">
                     <br/>
                    <h3>Neelesh Sharma</h3>
                    Bachelor of Technology, <br/>
                    Production and Industrial Engineering(Mechanical and Industrial Department),<br/>
                    IIT Roorkee, Uttarakhand, India<br/><br/>
                    <h4>Contact Details:</h4>
                    +91 9870938860 <br/>
                    <a href="https://www.linkedin.com/in/neelesh-sharma-6178971aa/">My linkedIn profile</a>
                 </div>
             </div>
        )
    }
    
}
export default Profile;