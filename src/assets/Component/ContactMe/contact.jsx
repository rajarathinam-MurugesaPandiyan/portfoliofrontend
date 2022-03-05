import React from "react";
import './contact.css'


const contactMe = () =>{
    return(
      <div className="contactDiv">
               <div className="mainForm">
                   <div className='formDiv'>
                       <form className="Form">
                           <span className="Label">Name *</span><br/>
                           <input className='inputName' placeholder="Please Enter your Name"/><br/>
                           <span className="Label">Mail Id *</span><br/>
                           <input className='inputName' placeholder="Please Enter your Mail Id"/><br/>
                           <span className="Label">Phone Number *</span><br/>
                           <input className='inputName' placeholder="Please Enter your Phone Number"/><br/>
                           <span className="Label">Description *</span><br/>
                           <textarea className='description' placeholder="Please Enter your Description"/><br/>
                           <button className="submitButton">Submit</button>
                       </form>
                   </div>
                   <div className="socialContentDiv">
                       <div className='SocialContent'>

                       </div>
                   </div>
               </div>
      </div>
    );
}

export default contactMe;