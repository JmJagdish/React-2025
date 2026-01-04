import React from "react";
import { USER_API } from "../utils/constant";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
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
          className="w-80 rounded-2xl bg-white border border-gray-200
                      shadow-md hover:shadow-xl transition-all duration-300
                      hover:-translate-y-1"
        >
          <div className="h-24 rounded-t-2xl bg-linear-to-r from-blue-500 to-indigo-600"></div>
          <div className="-mt-12 flex justify-center">
            <img
              src={avatar_url}
              alt={name}
              className="w-24 h-24 rounded-full border-4 border-white
                       shadow-md object-cover"
            />
          </div>

          <div className="px-6 py-4 text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

            <p className="text-sm text-gray-500">📍 {location}</p>

            <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>
          </div>

          <div className="flex justify-center gap-6 py-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black text-2xl transition-colors cursor-pointer"
            >
              <FaGithub />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-2xl transition-colors cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="px-6 pb-4 flex justify-center">
            <Button label="View Profile" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
