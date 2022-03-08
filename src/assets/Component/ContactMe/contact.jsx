import  {useState} from "react";
import './contact.css'






const ContactMe = () =>{

    const [providerName ,  setProviderName] = useState("")
    const [providerMail ,  setProviderMail] = useState("")
    const [providerDetail ,  setProviderDetail] = useState("")






    const submit = (e) =>{
        e.preventDefault();
        if(providerMail !=null && providerName != null ){
          async function apically () {
              let myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              let raw = JSON.stringify({
                  "provider_name": providerName,
                  "provider_mail": providerMail,
                  "provider_phone_num": "5001",
                  "provider_description": providerDetail
              });

              let requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
              };

               await fetch("https://portfolioraja.herokuapp.com/form/", requestOptions)
                  .then(response => response.text())
                  .then(result => console.log(result))
                  .catch(error => console.log('error', error));}
            apically()
            alert("Your Data Were Sent To Me")

        }else{
            alert("check Your input field something is wrong ")
        }

    }

    return(
      <div id="contactDiv">
               <div className="mainForm">
                   <div className='formDiv'>
                       <form className="Form">
                           <span className="Label">Name *</span><br/>
                           <input className='inputName' placeholder="Enter your Name" onChange={(e)=>{setProviderName(e.target.value)}}/><br/>
                           <span className="Label">Mail Id or Phone Number *</span><br/>
                           <input className='inputName' placeholder="Enter your Contact Info" onChange={(e)=>{setProviderMail(e.target.value)}}/><br/>
                           <span className="Label">Tell Me*</span><br/>
                           <textarea className='description' placeholder="You Can Tell Me Anything" onChange={(e)=>{setProviderDetail(e.target.value)}}/>
                           <br/>
                          <button id="submitButton" onClick={(e)=>submit(e)}>Submit</button>
                       </form>
                   </div>

               </div>
      </div>
    );
}

export default ContactMe;