import React , {useState} from "react";
import './header.css';
import {Link} from 'react-scroll'
import menu from '../../images/menu.svg'
import Theme from '../../images/Theme.png'


function Header () {


    const [toggleSec , setToggleSec] = useState(false)

      
    function toggleDark () {
        document.body.classList.remove("red");
         document.body.classList.remove("light")
        document.body.classList.add("darkTheme");
        document.getElementById("dropdownContent").style.display = "none"
   
    }
    function toggleRed () {
        document.body.classList.remove("darkTheme");
        document.body.classList.remove("light")
        document.body.classList.add("red");
        document.getElementById("dropdownContent").style.display = "none"
    }
    function toggleLight (){
            document.body.classList.remove("red")
            document.body.classList.remove("darkTheme")
            document.body.classList.add("light");
        document.getElementById("dropdownContent").style.display = "none"

    }

    function changeTheme (){
        let display = document.getElementById("dropdownContent")
        display.style.display = "block"
    }

       

 
    return(
        <>
        <div id="headerDiv"> 
           <div className="headerText"> PORTFOLIO</div>
           <div className="navBar">
                 <div className="navItems"> <Link to="About" spy={true} smooth={true}>
                     About </Link></div>
                  <div className="navItems"> <Link to="Experience" spy={true} smooth={true}>Experience</Link></div>
               <div className="navItems"  ><Link to="contactDiv"  spy={true} smooth={true}>Contact Me</Link></div>
                <div className="selectTheme">
                    <span className="dropdown">Themes</span>
                     <div id="dropdownContent">
                         <div style={{display : "flex" , flexDirection : "column" , cursor : "pointer"}}>
                        <label style={{cursor : "pointer"}} onClick={()=>{toggleLight()}}>Light</label>
                        <label style={{cursor : "pointer"}} onClick={()=>{toggleDark()}}>Dark</label>
                        <label style={{cursor : "pointer"}} onClick={()=>{toggleRed()}}>Red</label>
                         </div>
                    </div>
                </div>
               <img className="phoneTheme" onClick={changeTheme} src={Theme} alt="Theme" />
               <img className="menu" onClick={()=> setToggleSec(!toggleSec)} style = {{ borderRadius : "25px" }} src={menu} alt="Menus"/>
           </div>
        </div>

        {toggleSec?<div  style={{ display : "flex" , flexDirection : "column" , alignItems : "center" , height : "100px"  , width : "100vw" , backgroundColor : "white" }} >
                 <div className="navItems2"> <Link to="About" spy={true} smooth={true}> About </Link></div>
                  <div className="navItems2"> <Link to="Experience" spy={true} smooth={true}>Experience</Link></div>
                 <div className="navItems2" ><Link to="contactDiv"  spy={true} smooth={true}>Contact Me</Link></div>
        </div> : null}
           </>
    );
}

export default Header;
