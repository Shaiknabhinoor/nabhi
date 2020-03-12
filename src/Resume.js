import React from 'react';
import data from './data.json';
import icon from './man.svg';
let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    console.log(info);
    let person=data.profiles[info]
    console.log(person);
    
    return(
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile"></img>
                <h3>{person.basics.name}</h3>
                <hr></hr>
                <h3>{person.basics.email}</h3>
                <h3>{person.basics.mobile}</h3>
                <hr></hr>
            </div>
            <div className="child2">
               <h3>Educational Qualification</h3><hr></hr>
               {person.education.map((i,j)=>(
                   <div key={j}>
                   <h4>{i.degree}</h4>
                   <ul>
                        <li>{i.percentage}</li>
                        <li>{i.Institute}</li>
                   </ul>
                    </div>
               ))}
               <h3>SKILLS</h3>
               {person.skills.map((x,y)=>(
                   <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div key={1} style={{display:"inline"}}>
                                <span className="skills">{k}</span>
                            </div>
                        ))}
                    </div>
               ))}
            </div>
            <hr></hr> 
        </div>
    )
}
export default Resume;