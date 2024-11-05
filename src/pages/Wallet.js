import React from "react";
import RecommendedChannels from '../components/RecommendedChannels';

function Wallet() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pb-16">
      {/* اضافه کردن padding-bottom */}
      <div className="flex container mx-auto py-4 flex-grow">
        {/* ستون سمت چپ برای Recommended Channels */}
        <div className="w-1/4 pr-4">
          <RecommendedChannels />
        </div>

        {/* بخش اصلی صفحه */}
        <div className="w-3/4">
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
              {/* Header Section */}
              <Header />

              {/* Welcome Section */}
              <WelcomeSection />

              {/* Gift Card Balance Section */}
              <GiftCardBalance />

              {/* Subscription Balance Section */}
              <SubscriptionBalance />

              {/* Saved Payment Methods Section */}
              <SavedPaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="border-b pb-4 mb-4">
      <h1 className="text-2xl font-bold">Wallet</h1>
      <div className="flex mt-4">
        <a href="#" className="mr-4 text-blue-500">Wallet</a>
        <a href="#" className="mr-4 text-gray-500">Payment History</a>
        <a href="#" className="text-gray-500">Bits History</a>
      </div>
    </div>
  );
}

function WelcomeSection() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold">gehak32160, welcome to your wallet!</h2>
      <p className="mt-2 text-gray-700">Your Wallet is the central place where you can manage your Gift Card Balance...</p>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        <li>Subscriptions — includes exclusive badges and emotes</li>
        <li>Gift Subscriptions — to friends and communities</li>
        <li>Bits — interact with your favorite streamers</li>
        <li>Turbo — get ad-free viewing across Twitch</li>
      </ul>
    </div>
  );
}

function GiftCardBalance() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold">Gift Card Balance</h3>
      <p className="mt-2">$0.00 USD</p>
      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Redeem Gift Card</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Purchase Gift Card</button>
      </div>
    </div>
  );
}

function SubscriptionBalance() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold">Subscription Balance</h3>
      <p className="mt-2">0 Sub Tokens</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Redeem Sub Code</button>
      </div>
    </div>
  );
}

function SavedPaymentMethods() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-semibold">Saved Payment Methods</h3>
      <p className="mt-2 text-gray-500">You have no payment methods on record.</p>
    </div>
  );
}

export default Wallet;
