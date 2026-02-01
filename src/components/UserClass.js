import React from "react";
import { USER_API } from "../utils/constant";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";
import SocialLink from "../ui/SocialLink";
import { NavLink } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default User",
        location: "Default",
        avatar_url: "userImage",
        bio: "user Bio",
        githubUrl: "",
        linkedinUrl: "",
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
    const { name, location, avatar_url, bio, githubUrl, linkedinUrl } =
      this.state.userInfo;

    return (
      <div className="flex justify-center items-center py-10">
        <div
          className="w-80 rounded-2xl                    
                    backdrop-blur-xl
                    border border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.45)]
                    cursor-pointer"
        >
          <div className="h-24 rounded-t-2xl bg-yellow-500"></div>
          <div className="-mt-12 flex justify-center">
            <img
              src={avatar_url}
              alt={name}
              className="w-24 h-24 rounded-full border-4 backdrop-blur-xl border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                    object-cover"
            />
          </div>

          <div className="px-6 py-4 text-center items-center justify-center space-y-2 text-white">
            <h3 className="text-xl font-semibold ">{name}</h3>

            <p className="text-sm flex items-center justify-center gap-2"><FaLocationDot size={16} />{location}</p>

            <p className="text-sm line-clamp-3">{bio}</p>
          </div>

          <div className="flex justify-center gap-6 py-3">
            <NavLink to={githubUrl} target="_blank" rel="noopener noreferrer">
              <SocialLink>
                <FaGithub />
              </SocialLink>
            </NavLink>

            <NavLink to={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <SocialLink>
                <FaLinkedin />
              </SocialLink>
            </NavLink>
          </div>
          <div className="px-6 pb-4 flex justify-center">
            <Button variant="glass" label="View Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
