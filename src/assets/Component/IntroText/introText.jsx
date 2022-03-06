import React, { useState } from "react";
import './introText.css';
import textData from "../../Data/Data";
import { useEffect , useCallback } from "react";
import AnimatedText from 'react-animated-text-content';




const IntroText = () =>{
 
    const [newName, setName] = useState("Welcome To My PortFolio");



    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * textData.length);
        setName(textData[index]);

    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 8000);
        return () => clearInterval(intervalID);
    }, [shuffle])
   

    

 

    return(
        <div id="introDiv">
             <div className="introText" >
                 <AnimatedText
                 type="words" // animate words or chars
                 animation={{
                 x: '200px',
                 y: '-20px',
                 scale: 1.1,
                 ease: 'ease-in-out',
                 }}
                 animationType="float"
                 interval={0.06}
                 duration={0.8}
                 tag="p"
                 className="animated-paragraph"
                 includeWhiteSpaces
                 threshold={0.1}
                 rootMargin="20%"
                >
               {newName}
               </AnimatedText>
              
             </div>
          
             

        </div>
    );

}

export default IntroText;
