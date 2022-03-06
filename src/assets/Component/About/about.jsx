import React from "react";
import './about.css';
import developer from '../../images/developer.gif'






const aboutComponent = () =>{
    return(
        <div id="About">
            <div>
                <img className="gif"  src={developer} alt="" />
            </div>
            <div className = "aboutMe">
               Hi There 👋 , This Is  <h1> Rajarathinam M</h1>
               A Passionate <h1>Software Developer</h1>
            </div>
        </div>
    );
}


export default aboutComponent;