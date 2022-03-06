import React from "react";
import './footer.css'
import {Link} from 'react-scroll'


const  Footer = () =>{
    return (
        <div className="Footer">
            <div className="Thoughts">
                You Can Share your Thoughts Above
            </div>
            <div className="Thoughts">
                Thanks For Visiting
            </div>
            <div  className="Thoughts">
               <Link to="headerDiv"  spy={true} smooth={true}> Scroll To Top</Link>
            </div>

        </div>
    );
}

export default Footer;