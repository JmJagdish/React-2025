import { NavLink } from "react-router";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <footer className="mt-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">FoodApp</h2>
          <p className="mt-2 text-sm text-gray-500">
            Delicious food delivered to your doorstep, fast and fresh.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {links.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `transition-colors duration-200
                    ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-500"
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
          <h3 className="text-sm font-semibold text-gray-900 uppercase mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📍 New Delhi, India</li>
            <li>📧 support@foodapp.com</li>
            <li>📞 +91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © 2026 FoodApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
