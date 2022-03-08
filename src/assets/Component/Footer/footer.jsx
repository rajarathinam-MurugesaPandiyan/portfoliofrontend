import React from "react";
import './footer.css'
import {Link} from 'react-scroll'
import git from '../../images/Git.png'
import facebook from '../../images/facebook.png'
import linkedIn from '../../images/linkedin.jpg'
import up from '../../images/up.jpg'

let social = [
    {
        img : git,
        link : "https://github.com/rajarathinam-MurugesaPandiyan "
    },
    {
        img : facebook,
        link : "https://www.facebook.com/profile.php?id=100069458749588"
    },
    {
        img : linkedIn,
        link: "https://www.linkedin.com/in/rajarathinam-murugesan-6907a021a/ "

    }
]


const  Footer = () =>{
    return (
        <div className="Footer">
            <div className="SocialImage">
                {social.map( (e , index)=>(
                  <a href={e.link} target={'_blank'} rel="noreferrer"><img className="content" style={{}} key={index} src={e.img} alt="social"/></a>
                ))}

            </div>
            <div className="Thoughts">
                Thanks For Visiting
            </div>
            <div  className="Thoughts">
               <Link to="headerDiv"  spy={true} smooth={true}><img className="upImage" src={up} alt="up"/></Link>
            </div>

        </div>
    );
}

export default Footer;