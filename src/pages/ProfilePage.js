import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
            Log In
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Profile Info */}
        <section className="bg-gray-800 p-6 rounded shadow-md mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">Username</h2>
              <p className="text-gray-400">Just Chatting</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-8">
            <div>
              <span className="block text-lg font-bold">12.35K</span>
              <span className="text-gray-400">Followers</span>
            </div>
            <div>
              <span className="block text-lg font-bold">245</span>
              <span className="text-gray-400">Following</span>
            </div>
            <div>
              <span className="block text-lg font-bold">50</span>
              <span className="text-gray-400">Posts</span>
            </div>
          </div>
        </section>

        {/* Featured Streams Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Recent Streams</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Stream Thumbnail"
                    className="w-full"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 px-2 py-1 text-xs font-semibold rounded">
                    LIVE
                  </span>
                  <span className="absolute top-2 right-2 bg-black bg-opacity-60 px-2 py-1 text-xs rounded">
                    12.35K viewers
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Stream Title {item}
                  </h3>
                  <p className="text-sm text-gray-400">Category {item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Profile Settings */}
        <section>
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          <div className="bg-gray-800 p-6 rounded shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Username</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-700 rounded"
                  placeholder="Username"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 bg-gray-700 rounded"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-700 rounded"
                  placeholder="New Password"
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                Save Changes
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
