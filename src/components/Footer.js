import { NavLink } from "react-router";
import CompanyLogo from "../ui/CompanyLogo";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import SocialLink from "../ui/SocialLink";


const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <footer className="max-w-full px-2 pt-10 bg-linear-to-br from-teal-600 via-teal-700 to-teal-900 border-t border-gray-200">
      <div className="mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 lg:gap-16 max-w-11/12">
        <div>
          <CompanyLogo />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">
            Company
          </h3>

          <ul className="space-y-2 text-sm">
            {links.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white text-center">
            <li className="flex gap-2">
              <FaLocationDot size={16} /> New Delhi, India
            </li>
            <li className="flex gap-2">
              <MdEmail size={16} /> support@jdine.com
            </li>
            <li className="flex gap-2">
              <FaPhone size={16} /> +91 98765 43210
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase mb-3">
            Follow US
          </h3>
          <div className="flex gap-4 text-center">
            <NavLink
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLink>
                <FaInstagram size={20} />
              </SocialLink>
            </NavLink>

            <NavLink
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLink>
                <FaFacebook size={20} />
              </SocialLink>
            </NavLink>

            <NavLink
              to="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLink>
                <BsTwitterX size={20} />
              </SocialLink>
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLink>
                <FaLinkedin size={20} />
              </SocialLink>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-white">
        <p>Design & Built by Jagdish Mahanta</p>
        <p className="pt-2">© 2026 JDine. All rights reserved. NEW DELHI, INDIA</p>
      </div>
    </footer>
  );
};

export default Footer;
