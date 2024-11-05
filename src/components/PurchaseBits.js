import React from 'react';

const PurchaseBits = ({ onClose }) => {
  const bitsOptions = [
    { amount: 300, price: "$3.00", discount: "29% discount", icon: "🔼" },
    { amount: 100, price: "$1.40", discount: "", icon: "🔼" },
    { amount: 500, price: "$7.00", discount: "", icon: "🔼" },
    { amount: 1500, price: "$19.95", discount: "5% discount", icon: "🔷" },
    { amount: 5000, price: "$64.40", discount: "8% discount", icon: "🔷" },
    { amount: 10000, price: "$126.00", discount: "10% discount", icon: "🔷🔴" },
    { amount: 25000, price: "$308.00", discount: "12% discount", icon: "🔷🔴" },
  ];

  return (
    <div className="bg-white w-64 shadow-lg rounded-lg p-6 z-50 absolute right-0 mt-2"> {/* تنظیمات مشابه UserMenu */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Purchase Bits</h2>
        <button onClick={onClose} className="text-gray-500">✖</button>
      </div>
      <p className="text-sm text-gray-700 mb-4">You have <span className="font-bold">0 Bits</span></p>
      <h3 className="font-bold text-lg mb-2">Use Bits to support streamers</h3>
      <p className="text-sm text-gray-600 mb-6">
        When you use Bits in a channel, Twitch rewards the streamer and you create an exciting moment.
      </p>
      <p className="text-sm text-gray-600 mb-2">Prices are shown in <span className="font-bold">USD</span></p>
      <div className="space-y-4">
        {bitsOptions.map((option, index) => (
          <div key={index} className="flex justify-between items-center border border-gray-200 rounded-lg p-3">
            <div className="flex items-center">
              <span className="text-lg mr-2">{option.icon}</span>
              <span className="font-bold">{option.amount} Bits</span>
            </div>
            <div className="text-right">
              <p className="bg-purple-500 text-white font-bold py-1 px-3 rounded-full">{option.price}</p>
              {option.discount && <p className="text-xs text-gray-500">{option.discount}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseBits;
