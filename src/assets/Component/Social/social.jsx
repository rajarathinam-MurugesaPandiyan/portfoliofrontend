import React  from "react";
import './social.css';
import Images from "../../images/images";


const Social = (props) =>{
   
    const click = () =>{
        window.alert("You Can See The Number in Console 👇 ")
         console.log("My Number",8610068811)
    }
    const mail  = () =>{
        let mail = "rajamurugesan217@gmail.com"
        window.alert("You Can See The Email Id In SessionStorage 🤙")
        sessionStorage.setItem("Mail_Id" , mail)
    }

    return(
        <div id="Social" onClick={e=> e.target===e.currentTarget? props.condition(false) : null}>
            <div className="inside">
                <div className="Heading"> For Contact </div>
                  <div onClick={()=>props.condition(false)} ><img className="exit" src={Images.Exit} alt=""/></div>
                  <div className="Content">
                      <div><a target={"_blank"} href="https://www.linkedin.com/in/rajarathinam-murugesan-6907a021a/"><img className="Link" src={Images.Linkedin}/></a></div>
                      <div><img onClick={click} className="What" src={Images.Whatsapp}/></div>
                      <div><img onClick={mail} className="What" src={Images.mail}/></div>
                      <div><a target={"_blank"} href="https://www.facebook.com/profile.php?id=100069458749588"><img className="What" src={Images.facebook}/></a></div>
                  </div>
            </div>
        </div>
    );
}

export default Social;