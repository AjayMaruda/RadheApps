import React, { memo } from 'react'


const ContactUs = memo(() => {
    return (
        <div className="bg-white-900 text-black-100 flex justify-center items-center min-h-screen p-4">
            <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Ready To Fuel Your Vision With AI-Powered Innovation?
                    </h2>
                    <p className="mb-6">
                        Partner with experts who leverage AI & Tech to transform ideas into market-leading solutions.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-lg text-black mb-2">Our Presence</h3>
                        <p className="mb-3 leading-relaxed">
                            Level 26, Dubai World Trade Centre Tower, Sheikh Rashid Tower, Sheikh Zayed Rd, Dubai, UAE
                        </p>
                        <p className="mb-3">
                            <a href="mailto:business@radhe.com" className="text-green-400 hover:underline">
                                business@radhe.com
                            </a>
                        </p>
                        <p className="mb-3">
                            <a href="tel:+91982500982500" className="text-green-400 hover:underline">
                                +91 982500982500
                            </a>
                        </p>
                    </div>
                </div>

                
                <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-bkack">Let's Connect</h2>
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-black">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-white-800 text-black rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-black">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-white-800 text-black rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-white-800 text-black rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-black">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-white-800 text-black rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-white-800 text-black rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:shadow-lg text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2"

                        >
                            Let's Connect

                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
});

export default ContactUs
