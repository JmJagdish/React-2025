import Button from "../ui/Button";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="">
      <div
        className="rounded-lg text-white py-14"
      >
        <div className="w-full mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg opacity-90">
            We’re here to help you with orders, support, and feedback
          </p>
        </div>
      </div>

      <div className="max-w-10/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Get in Touch 🍽️</h2>
          <p className="text-white">
            Have questions about your order, delivery, or restaurant listings?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4 text-white">
            <li className="flex gap-3">
              <FaLocationDot size={16} /> New Delhi, India
            </li>
            <li className="flex gap-3">
              <MdEmail size={16} /> support@jdine.com
            </li>
            <li className="flex gap-3">
              <FaPhone size={16} /> +91 98765 43210
            </li>
          </div>
        </div>

        <div
          className="p-8 rounded-lg h-115 backdrop-blur-xl
                    border border-white/20
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.45)]
                    cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Send us a message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full
                        px-4 pr-14 py-3
                        rounded-full
                        text-white
                        placeholder-white/60
                        bg-white/10
                        backdrop-blur-md
                        border border-white/20
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-purple-400/40"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full
                        px-4 pr-14 py-3
                        rounded-full
                        text-white
                        placeholder-white/60
                        bg-white/10
                        backdrop-blur-md
                        border border-white/20
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-purple-400/40"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full
                        px-4 pr-14 py-3
                        rounded-lg
                        text-white
                        placeholder-white/60
                        bg-white/10
                        backdrop-blur-md
                        border border-white/20
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.15)]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-purple-400/40"
            />

            <Button
              variant="glass"
              type="submit"
              className="w-full"
              label="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
