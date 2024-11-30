import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "default",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nihalsandhu09");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // this.Interval = setInterval(() => {
    //   // console.log("namsate React op");
    // }, 1000);
  }
  componentDidUpdate() {
    // console.log("ComponentDIdUpdate");
  }
  componentWillUnmount(prevProps, prevState) {
    // console.log("unmount");
    // clearInterval(this.Interval);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-Card">
        <img src={avatar_url}></img>
        <h2>Name {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @nihalSandhu</h4>
      </div>
    );
  }
}
export default UserClass;

/**
  Mountibg life Cycle 
   -Constructor (dummy) 
    Render (dummy )
        <HTML Dummy> 
        Component did Mount 
        <Api Call>
        <this.setState>  state variable is updated 

        Update Cycle 
        render (api data )
        <html loaded>(new api data)
        componentDidUpdate




 */
