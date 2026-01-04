import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-r from-blue-500 to-indigo-600 text-white py-16 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg opacity-90">
            We’re here to help you with orders, support, and feedback
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Get in Touch 🍽️
          </h2>
          <p className="text-gray-600">
            Have questions about your order, delivery, or restaurant listings?
            Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span>support@foodapp.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Send us a message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button type="submit" className="w-full" label="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
