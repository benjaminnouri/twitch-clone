import React, { useState } from "react";
import ModalSignUp from "./ModalSignUp";
import ModalLogin from "./ModalLogin"; // اضافه کردن ایمپورت مودال ورود
import DropdownMenu from "./DropdownMenu";
import UserMenu from "./UserMenu";
import PurchaseBits from "./PurchaseBits";

const Navbar = () => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // اضافه کردن وضعیت مودال ورود
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // مدیریت حالت ورود کاربر
  const [isPurchaseOpen, setPurchaseOpen] = useState(false); // مدیریت حالت باز بودن مودال PurchaseBits

  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  const openLoginModal = () => setLoginModalOpen(true); // توابع باز و بسته کردن مودال ورود
  const closeLoginModal = () => setLoginModalOpen(false);

  const toggleUserMenu = () => setUserMenuOpen(!isUserMenuOpen);
  const togglePurchaseBits = () => setPurchaseOpen(!isPurchaseOpen);

  const handleLogin = () => setIsLoggedIn(true); // تابع ورود به سایت (به عنوان مثال)
  const handleLogout = () => setIsLoggedIn(false); // تابع خروج از سایت (به عنوان مثال)

  return (
    <nav className="bg-white border-b border-gray-200 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section - Logo and Browse */}
        <div className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/331991/twitch.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="ml-4 font-bold text-black">Browse</span>
          <DropdownMenu />
        </div>
        {/* Middle Section - Search */}
        <div className="flex-1 mx-4 flex justify-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              className="border border-gray-300 rounded-full py-2 px-4 pr-8 w-full"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3a7 7 0 106.7 9.763l4.242 4.243a1 1 0 11-1.414 1.414l-4.243-4.242A7 7 0 109 3zM5 9a4 4 0 118 0 4 4 0 01-8 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Right Section - Notifications, Login, Signup */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.58-.434c-.267-.157-.563-.28-.88-.36C16.936 14.43 16 12.857 16 11V9a6 6 0 00-4-5.659V2a2 2 0 10-4 0v1.341A6 6 0 004 9v2c0 1.857-.936 3.43-2.135 4.8-.317.08-.613.203-.88.36-.172.105-.325.24-.456.405L1 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6"
                  />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  28
                </span>
              </div>
              <button
                onClick={togglePurchaseBits}
                className="focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h16v16H4z"
                  />
                </svg>
              </button>
              <button onClick={handleLogout} className="text-black font-bold">
                Log Out
              </button>
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="focus:outline-none"
                >
                  <img
                    src="https://www.svgrepo.com/show/331991/twitch.svg"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 z-50">
                    <UserMenu />
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button onClick={openLoginModal} className="text-black font-bold">
                Log In
              </button>
              <button
                onClick={openSignUpModal}
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* اضافه کردن مودال برای Sign Up و Log In */}
      <ModalSignUp isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
      <ModalLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      {/* نمایش شرطی PurchaseBits */}
      {isPurchaseOpen && (
        <div className="absolute top-12 right-0 mt-2 z-40 bg-white shadow-lg border border-gray-300 rounded-lg p-4 w-64">
          <PurchaseBits onClose={togglePurchaseBits} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
