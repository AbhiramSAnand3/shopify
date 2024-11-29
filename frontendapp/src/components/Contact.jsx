import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info Section */}
        <div className="p-6 bg-[#bf9774] text-white rounded-l-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center pb-5 mb-4">Get in Touch</h2>
          <p className="mb-6">We’d love to hear from you! Reach out to us with any questions, feedback, or just to say hello.</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="material-icons text-lg mr-2">email</span>
              <a href="mailto:example@example.com" className="underline">example@example.com</a>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-lg mr-2">phone</span>
              <a href="tel:+123456789" className="underline">+91 7722272727</a>
            </li>
            <li className="flex items-center">
              <span>kaloor,Kochi</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-[#bf9774] focus:border-[#bf9774]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-[#bf9774] focus:border-[#bf9774]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-[#bf9774] focus:border-[#bf9774]"
                placeholder="Your Message"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-[#bf9774] rounded-md hover:bg-[#a6745d] focus:ring-2 focus:ring-[#bf9774] focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
