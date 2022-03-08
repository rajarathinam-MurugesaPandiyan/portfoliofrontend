import React from "react";
import './experience.css';
import data from  '../../Data/experienceData.json'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';




let experienceData = data
console.log(experienceData)



const Experience = () =>{




    return(
        <div id="Experience">

            <div className="outerDiv">
                <Carousel style={{ borderRadius:"10px" ,backgroundColor : "black", width : "90vw" , height : "90vh"  , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                    <Carousel.Item >
                            <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                                <div><h3>Trello (React -Js)</h3></div>
                                <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center" }}><p> This Is A To A Project Management Tool  With Search Filter And DND Operations Without any third Party Library</p></div>
                               <a href="http://trelloreact.surge.sh/" target={'_blank'} rel="noreferrer"> <button style={{width : "100px" , height : "40px" , borderRadius : "10px", border : "2px solid var(--background-color)"  ,backgroundColor : "var(--background-color)"}}>visit</button></a>
                            </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                            <div><h3>Klub(Next-Js)</h3></div>
                            <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center"  }}><p>This IS A Financial Website Which is Has Completed The UI Work This Project Was Build in Next-Js</p></div>
                            <a href="https://klub-next.d2v6mruc9hsrc6.amplifyapp.com/" target={'_blank'} rel="noreferrer"><button style={{width : "100px" , height : "40px" , borderRadius : "10px", border : "2px solid var(--background-color)"  ,backgroundColor : "var(--background-color)"}}>visit</button></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                            <div><h3>Tip Calculator (Js)</h3></div>
                            <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center"  }}><p>This Is a Simple Tip Calculator to Find The Shares Of the Each Person For Giving Tip</p></div>
                            <a href="http://adorable-reason.surge.sh/" target={'_blank'} rel="noreferrer"><button style={{width : "100px" , height : "40px" , borderRadius : "10px", border : "2px solid var(--background-color)"  ,backgroundColor : "var(--background-color)"}}>visit</button></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                            <div><h3>Django(Python)</h3></div>
                            <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center"  }}><p>This Is A backend project for The Current portfolio With Create And Post Methods It was Made In The Django RestApi FrameWork</p></div>
                            <a href="https://portfolioraja.herokuapp.com/show/" target={'_blank'} rel="noreferrer"><button style={{width : "100px" , height : "40px" , borderRadius : "10px", border : "2px solid var(--background-color)"  ,backgroundColor : "var(--background-color)"}}>visit</button></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                            <div><h3>chromeExtension(Js)</h3></div>
                            <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center"  }}><p>Having Experience In The Chrome Extension Development With Pure JavaScript This is a Prank making Chrome Extension</p></div>
                            <a href="https://github.com/rajarathinam-MurugesaPandiyan/ChromeExtension" target={'_blank'} rel="noreferrer"><button style={{width : "100px" , height : "40px" , borderRadius : "10px", border : "2px solid var(--background-color)"  ,backgroundColor : "var(--background-color)"}}>Git</button></a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item >
                        <div  style={{ height : "90vh" ,width : "90vw" ,display:"flex" , alignItems : "center" , justifyContent : "center" ,flexDirection:"column" , color :"white"}}>
                            <div><h3>Other Css Modules</h3></div>
                            <div style={{width : "40vw" ,display : "flex" , alignItems : "center" , justifyContent : "center" , textAlign : "center"  }}><p>Worked in the Css Modules Like Tails Wind , Ant-D  , Bootstrap . Currently The Website Are Not Available</p></div>
                        </div>
                    </Carousel.Item>



                </Carousel>

            </div>

        </div>
    );
}


export default Experience;
