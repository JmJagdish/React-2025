import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        backdrop-blur-lg bg-white/20
        border border-white/30
        text-white
        p-4 rounded-full
        shadow-xl
        hover:bg-white/30
        transition-all duration-300
      "
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTopButton;
