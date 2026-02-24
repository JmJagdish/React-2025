import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Button from "../ui/Button";
import CompanyLogo from "../ui/CompanyLogo";
import { getUserProfile } from "../api/userApi";

const Header = () => {
  const [btn, setBtn] = useState("Sign in");
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const [username, setUsername] = useState();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Grocery", path: "/grocery" },
  ];

  useEffect(() => {
    fetchUser();
  }, []);

    const fetchUser = async () => {
        try {
          const data = await getUserProfile(1);
          setUsername(data.username);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

  return (
    <header className="max-w-full sticky top-0 z-50 bg-linear-to-br from-teal-600 via-teal-700 to-teal-900 shadow-md">
      <div className="flex mx-6 items-center justify-between h-20">
        {/* Logo */}
        <NavLink to="/">
          <CompanyLogo />
        </NavLink>

        <NavLink
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="lg:hidden relative flex items-center gap-2  text-white p-2
                      rounded-full  bg-white/10 backdrop-blur-md border border-white/20
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.35)]
                      hover:bg-white/20 transition
                    "
        >
          <FiShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span
              className="absolute -top-1 -right-1 h-4.5 px-1 flex items-center justify-center
                rounded-full bg-yellow-400 text-xs font-bold text-white shadow-md "
            >
              {cartItems.length}
            </span>
          )}
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <ul className="flex gap-6">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-semibol"
                      : "text-white hover:text-yellow-400"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className=" relative flex items-center gap-2  text-white p-2
                      rounded-full  bg-white/10 backdrop-blur-md border border-white/20
                      shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.35)]
                      hover:bg-white/20 transition
                    "
          >
            <FiShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span
                className="absolute -top-1 -right-1 h-4.5 px-1 flex items-center justify-center
                rounded-full bg-yellow-400 text-xs font-bold text-white shadow-md "
              >
                {cartItems.length}
              </span>
            )}
          </NavLink>

          <Button variant="glass" className="flex items-center gap-2">
            <GoDotFill
              className={onlineStatus ? "text-green-400" : "text-red-400"}
              size={18}
            />
            {onlineStatus ? "Active" : "Inactive"}
          </Button>

          <div
            className="cursor-pointer rounded-full p-2 bg-white/15 border border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                  hover:bg-white/20
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_32px_rgba(0,0,0,0.45)]
                    backdrop-blur-lg text-white"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
          </div>
          <div>
            <p className="font-bold text-white">{username}</p>
          </div>
          <Button
            variant="glass"
            label={btn}
            onClick={() => setBtn(btn === "Sign in" ? "Sign up" : "Sign in")}
          />

          <span className="font-bold text-white">{loggedInUser}</span>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={34} className="text-white" />
          ) : (
            <FiMenu size={34} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-linear-to-br from-teal-500 to-teal-900 text-white px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg text-white hover:text-blue-500"
            >
              {name}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-white"
          >
            <FiShoppingCart size={22} />
            Cart ({cartItems.length})
          </NavLink>

          <Button variant="glass" className="flex items-center gap-2">
            <GoDotFill
              className={onlineStatus ? "text-green-400" : "text-red-400"}
              size={18}
            />
            {onlineStatus ? "Active" : "Inactive"}
          </Button>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <FiMoon /> : <FiSun />}
            Theme
          </div>
          <div>
            <p className="font-bold text-white">{username}</p>
          </div>
          <Button
            variant="glass"
            label={btn}
            onClick={() => setBtn(btn === "Sign in" ? "Sign up" : "Sign in")}
          />
          <div className="font-bold">{loggedInUser}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
