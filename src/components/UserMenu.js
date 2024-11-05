import React, { useState } from 'react';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // مدیریت وضعیت باز و بسته شدن منو

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* دکمه Wallet برای باز کردن منو */}
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Wallet
      </button>

      {/* منوی کاربری */}
      {isMenuOpen && (
        <div className="bg-white w-64 shadow-lg rounded-lg p-4 z-50 absolute right-0 mt-2">
          {/* اضافه کردن z-50 و absolute */}
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <p className="font-bold">gehak32160</p>
            </div>
          </div>

          <div className="space-y-2">
            <MenuItem icon="👤" label="Channel" />
            <MenuItem icon="🎥" label="Video Producer" />
            <MenuItem icon="📊" label="Creator Dashboard" />
            <MenuItem icon="🔒" label="Privacy Center" />
            <MenuItem icon="🛡️" label="Safety" />
            <hr />
            <MenuItem icon="😊" label="Emote Attribution" />
            <MenuItem icon="⭐" label="Subscriptions" />
            <MenuItem icon="🎁" label="Drops & Rewards" />
            <MenuItem icon="💰" label="Wallet" />
            <hr />
            <MenuItem icon="⚙️" label="Settings" />
            <MenuItem icon="📺" label="Content Tuning" />
            <MenuItem icon="🌐" label="Language" />
            <MenuItem icon="🌙" label="Dark Theme" switchControl />
            <hr />
            <MenuItem icon="🔓" label="Log Out" />
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, switchControl }) => (
  <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
    <div className="flex items-center">
      <span className="text-lg mr-2">{icon}</span>
      <p>{label}</p>
    </div>
    {switchControl && (
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    )}
  </div>
);

export default UserMenu;


