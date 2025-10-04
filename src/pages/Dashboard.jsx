import React from 'react'

const Dashboard = () => {
  return (
    
<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex justify-end ">
  
  {/* Container */}
  <div className="bg-white h-full w-full md:w-[400px] flex flex-col shadow-xl">
    
    {/* Header */}
    <div className="flex justify-between items-center px-4 py-3 border-b">
      <h2 className="font-semibold text-lg">Add New User</h2>
      {/* <button onClick={closeForm}>✕</button> */}
    </div>
    
    {/* Body */}
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {/* form fields go here */}
      <input className="w-full border rounded px-3 py-2" placeholder="First Name*" />
      <input className="w-full border rounded px-3 py-2" placeholder="Last Name*" />
      <input className="w-full border rounded px-3 py-2" placeholder="Email Address*" />
      {/* etc */}
    </div>
    
    {/* Footer */}
    <div className="px-4 py-3 border-t">
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add User
      </button>
    </div>
  </div>
</div>

  )
}

export default Dashboard