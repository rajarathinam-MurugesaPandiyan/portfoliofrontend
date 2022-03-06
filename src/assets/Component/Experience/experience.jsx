import React from "react";
import './experience.css';
import data from  '../../Data/experienceData.json'
import { useEffect , useState , useCallback} from "react";


let experienceData = data.Data
console.log(experienceData)



const Experience = () =>{

    const [newText, setText] = useState("My Experience")
    const [newContent, setContent] = useState("In This Section I Will Give a Brief Explanation About The Projects and Experience Gained");
    const [Link , setLink] = useState()

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * experienceData.length);
        setText(experienceData[index].title);
        setContent(experienceData[index].content)
        setLink(experienceData[index].link)
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 6000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return(
        <div id="Experience">
            <div className="outerDiv">
                    <div className="cardDiv">
                        <p className="projectTitle">{newText}</p>
                        <a href={Link} target={'_blank'} rel="noreferrer"><button className="webLinks">View</button></a>
                    </div>
                    <div className="contentDiv">
                        <p>Project Details</p><br/>
                        <p className="projectContent">{newContent}</p>
                    </div>
            </div>
        </div>
    );
}


export default Experience;
