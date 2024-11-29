const Footer = () => {
    return (
      <>
       <div className="w-full border-2 border-l-0 border-r-0 border-gray-300 h-[40px] flex items-center">
  <div className="w-full flex justify-center relative px-4">
    <h1 className="font-semibold py-2 text-center text-sm md:text-base">
      SALE UP 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
    </h1>
  </div>
</div>

  
        <footer className="bg-white text-black py-12 px-6">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo Section */}
            <div className="flex flex-col items-start border-black">
              <h1 className='font-hfont font-bold text-4xl'>shopify</h1>
              <p className="text-lg">The Best Look Any Time Anywhere</p>
            </div>
  
            {/* Link Sections */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
                <li><a href="/services" className="hover:text-blue-500">Everything</a></li>
                <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                <li><a href="/blog" className="hover:text-blue-500">Accessories</a></li>
              </ul>
            </div>
  
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
                <li><a href="/faq" className="hover:text-blue-500">FAQ</a></li>
              </ul>
            </div>
  
            {/* Subscribe Section */}
            <div className="flex flex-col items-center justify-center col-span-1 sm:col-span-2 lg:col-span-1 mt-6">
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <div className="flex items-center space-x-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md text-black border-2 border-gray-400"
                />
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Social Media and Copyright */}
          <div className="mt-12 border-t border-gray-700 pt-6">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a href="https://facebook.com" className="text-black hover:text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" className="text-black hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="text-black hover:text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="text-black hover:text-blue-800">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
  
              {/* Copyright */}
              <p className="text-sm text-gray-400">&copy; 2024 DNK Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  