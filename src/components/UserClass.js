import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/diksha12061996");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        })
    }

    render() {
        const { name, location } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location:{location}</h3>
                <h4>Email:diksharajput1206@gmail.com</h4>
            </div>
        );
    };

};
export default UserClass;