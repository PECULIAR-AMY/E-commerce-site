
const Account = () => {
  return (
    <div className="p-6 space-y-6">
      

      {/* Breadcrumb */}
      <div className="flex items-center space-x-4 text-gray-600">
        <h1 className="text-lg">Home / Account</h1>
        <p className="text-gray-700">Welcome! <span className="text-red-500 font-semibold">Rime</span></p>
      </div>

      {/* Account Management */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h1 className="text-xl font-semibold">Manage My Account</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="text-red-500 font-medium block mb-1">My Profile</label>
              <input 
                type="text" 
                placeholder="Address Book" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Payment Option" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="font-semibold block mb-1">My Order</label>
              <input 
                type="text" 
                placeholder="My Returns" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="My Cancellations" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
        
        <p className="text-lg font-semibold mt-4">My Wish List</p>
        <p className="text-red-500 font-medium">Edit your Profile</p>
        
        {/* Profile Form */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium">First Name</label>
              <input 
                type="text" 
                placeholder="Md" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input 
                type="email" 
                placeholder="emmanuel@gmail.com" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Last Name</label>
              <input 
                type="text" 
                placeholder="Remark" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block font-medium">Add Address</label>
              <input 
                type="text" 
                placeholder="16 Odubajjo Shomolu" 
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <p className="text-lg font-semibold mt-6">Password Change</p>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">New Password</label>
            <input 
              type="password" 
              placeholder="Enter new password" 
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="block font-medium">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm new password" 
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
