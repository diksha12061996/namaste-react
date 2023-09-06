import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <h1>About</h1>  
                <div>Logged in User
                <UserContext.Consumer>
                    {({loggedInUser})=>
                    (<h1 className=" text-xl font-bold">{loggedInUser}</h1>)}
                </UserContext.Consumer>

                </div>          
                <UserClass name={"About Class child 1 "} location={"Delhi"}/>
            </div>
        )
    }
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>            
//             <UserClass name={"Deeksha"} location={"Delhi"}/>
//         </div>
//     )
// }
export default About;