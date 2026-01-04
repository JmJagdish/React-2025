import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Button from "../ui/Button";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [modeName, setModeName] = useState("Light");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 h-20">
        <div>
          <img className="w-12 h-12 rounded-full" src={LOGO_URL} />
        </div>

        <div className="flex gap-4 text-lg items-center">
          <ul className="flex gap-6 items-center">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Cart", path: "/cart" },
              { name: "Grocery", path: "/grocery" },
            ].map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `relative transition-all duration-300
          ${
            isActive
              ? "text-blue-600 px-3 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600"
              : "text-gray-700 hover:text-blue-500"
          }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button>{onlineStatus ? "🟢 Active" : "🔴 Inactive"}</Button>

          <Button
            label={modeName}
            onClick={() => setModeName(modeName === "Light" ? "Dark" : "Light")}
          />

          <Button
            label={btn}
            onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
