import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">KICK</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <a href="#" className="hover:underline">Community Guidelines</a>
          <a href="#" className="hover:underline">DMCA Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Help & Support</a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span>Support <a href="mailto:support@kick.com" className="hover:underline">support@kick.com</a></span>
          <span>Partners <a href="mailto:partners@kick.com" className="hover:underline">partners@kick.com</a></span>
          <span>Careers <a href="mailto:careers@kick.com" className="hover:underline">careers@kick.com</a></span>
          <a href="#" className="hover:underline">Kick Community</a>
          <a href="#" className="hover:underline">Kick Brand</a>
          <a href="#" className="hover:underline">Official Kick Merch</a>
        </div>
        <div className="mt-4">
          <select className="bg-gray-800 text-white py-1 px-3 rounded border border-gray-700">
            <option value="en">English</option>
            {/* Add other language options here */}
          </select>
        </div>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Discord" className="text-gray-400 hover:text-white">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
