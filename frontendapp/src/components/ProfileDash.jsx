
const ProfileDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center  justify-center py-10">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://via.placeholder.com/100" // Replace with user's profile picture
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#bf9774]"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Details</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Username: </span>
                johndoe123
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Phone: </span>
                +1 123 456 7890
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Address: </span>
                123 Main Street, Anytown, USA
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-800">Membership: </span>
                Premium
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-[#bf9774] text-white font-medium rounded-lg hover:bg-transparent hover:border hover:text-black">
                Edit Profile
              </button>
              <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-transparent hover:border hover:text-black">
                Change Password
              </button>
              <button className="w-full py-2 px-4 bg-black text-white font-medium rounded-lg hover:bg-transparent hover:border hover:text-black">
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Orders</h3>
              <p className="text-2xl font-bold text-[#bf9774]">12</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Wishlist</h3>
              <p className="text-2xl font-bold text-[#bf9774]">5</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
              <p className="text-2xl font-bold text-[#bf9774]">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
