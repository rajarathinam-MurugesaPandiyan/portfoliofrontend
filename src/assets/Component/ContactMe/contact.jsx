import  { useCallback, useEffect, useState} from "react";
import './contact.css'
import git from '../../images/Git.png'
import facebook from '../../images/facebook.png'
import linkedIn from '../../images/linkedin.jpg'





const ContactMe = () =>{
    let imageData = [git , linkedIn , facebook]
    let LinkData =["https://github.com/rajarathinam-MurugesaPandiyan ",
        "https://www.linkedin.com/in/rajarathinam-murugesan-6907a021a/" ,
        "https://www.facebook.com/profile.php?id=100069458749588" ]

    const [images , setImage] = useState(git);
    const [Link , setLink] = useState("https://github.com/rajarathinam-MurugesaPandiyan");
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

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * imageData.length);
        setImage(imageData[index])
        setLink(LinkData[index]);

    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 8000);
        return () => clearInterval(intervalID);
    }, [shuffle])



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
                   <div className="socialContentDiv">
                       <div className='SocialContent'>
                           <a href={Link} target={"_blank"} rel="noreferrer"> <img className="socialConnect" src={images} alt="git"/></a>
                       </div>
                   </div>
               </div>
      </div>
    );
}

export default ContactMe;