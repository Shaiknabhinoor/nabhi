import React from 'react';
import data from './data.json';
import icon from './man.svg';
import Resume from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';
let Profile=()=>{
    const profiles=data.profiles;
    console.log(profiles);
    
    return(
        <div className="parent">
            <BrowserRouter>
                <Route exact path="/Resume" component={Resume}></Route>
            </BrowserRouter>
  
            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile"></img>
                    <h2>{i.basics.name}</h2>
                    <hr></hr>
            <a href={"mailto:"+i.basics.email} className="link"> {i.basics.email} </a><br></br>
            <a href={"tel:"+i.basics.mobile}  className="link"> {i.basics.mobile}</a><br></br>
            <hr></hr>
            <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn"> View Profile</Link>
                </div>
            ))}
        </div>
    )
}
export default Profile;