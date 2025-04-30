import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4">
          Let us be the Part of <span className="text-green-500">Your Business!!</span>
        </h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="border rounded-lg p-3 w-full" required />
          <input type="email" placeholder="Email" className="border rounded-lg p-3 w-full" required />
          <input type="tel" placeholder="Phone" className="border rounded-lg p-3 w-full" required />
          <textarea
            placeholder="Tell Us About Your Business"
            className="border rounded-lg p-3 w-full h-24"
            required
          ></textarea>

          <button type="submit" className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Submit
          </button>

          <div className="flex flex-col text-left text-sm mt-4 space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span>I Agree To Receive SMS</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked />
              <span>Connect On WhatsApp</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};



export default ContactPage;
