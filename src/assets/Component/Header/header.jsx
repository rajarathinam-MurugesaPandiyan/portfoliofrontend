import React , {useState} from "react";
import './header.css';
import {Link} from 'react-scroll'
import Social from "../Social/social";
import menu from '../../images/menu.svg'


function Header () {

    const [toggle , setToggle] = useState(false)
    const [toggleSec , setToggleSec] = useState(false)

      
    function toggleDark () {
        document.body.classList.remove("red");
         document.body.classList.remove("light")
        document.body.classList.add("darkTheme");
   
    }
    function toggleRed () {
        document.body.classList.remove("darkTheme");
        document.body.classList.remove("light")
        document.body.classList.add("red");
    }
    function toggleLight (){
            document.body.classList.remove("red")
            document.body.classList.remove("darkTheme")
            document.body.classList.add("light");

    }

       

 
    return(
        <>
        <div id="headerDiv"> 
           <div className="headerText"> PORTFOLIO</div>
           <div className="navBar">
                 <div className="navItems"> <Link to="About" spy={true} smooth={true}>
                     பற்றி </Link></div>
                  <div className="navItems"> <Link to="Experience" spy={true} smooth={true}>Experience</Link></div>
               <div className="navItems" onClick={()=>setToggle(!toggle)}>Contact Me</div>
                <div className="selectTheme">
                    <span className="dropdown">Themes</span>
                     <div className="dropdownContent">
                        <label onClick={()=>{toggleLight()}}>Light</label>


                    </div>
                    <div className="dropdownContent">
                        <label onClick={()=>{toggleDark()}}>Dark</label>
                    </div>
                    <div className="dropdownContent">
                        <label onClick={()=>{toggleRed()}}>Red</label>
                    </div>
                </div>
               <a href="https://drive.google.com/u/0/uc?id=1ZMp12E4HPfrXxs2G2PPR_9jda_KF0koY&export=download" download={"Profile"}><button className="Download" >Resume</button> </a>
               <img className="menu" onClick={()=> setToggleSec(!toggleSec)} style = {{ borderRadius : "25px" }} src={menu} alt="Menus"/>
           </div>
        </div>
        {toggle?<Social condition = {setToggle}/>:null}
        { toggleSec?<div style={{ display : "flex" , flexDirection : "column" , alignItems : "center" , height : "150px"  , width : "100vw" , backgroundColor : "white"}} > 
                 <div className="navItems2"> <Link to="About" spy={true} smooth={true}> About </Link></div>
                  <div className="navItems2"> <Link to="Experience" spy={true} smooth={true}>Experience</Link></div>
               <div className="navItems2"  onClick={()=>setToggle(!toggle)}>Contact Me</div>
               <a href="https://drive.google.com/u/0/uc?id=1ZMp12E4HPfrXxs2G2PPR_9jda_KF0koY&export=download" download={"Profile"}><button className="DownloadSec" >Resume</button> </a>
        </div> : null}
           </>
    );
}

export default Header;
