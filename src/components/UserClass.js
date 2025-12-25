import React from "react";
import {USER_API} from "../utils/constant";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "userImage",
        bio:"user Bio"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(USER_API);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="">
        <div className="userCard">
          <h3>User Details</h3>
          <img src={avatar_url} className="user-img" alt="jagdish" />
          <h3>Name : {name}</h3>
          <h3>Location : {location}</h3>
          <h3>Bio : {bio}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
