import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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