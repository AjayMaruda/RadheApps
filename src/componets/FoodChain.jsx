import React, { memo } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Icon = memo(({ path }) => (
  <svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
));

const FoodChain = () => {
  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow">
        <div className="navbar flex justify-start pl-5 py-3">
          <Link to="/" className="font-bold text-xl text-black">
            <span className="text-[#cdcd32]">Food</span> Chain
          </Link>
        </div>
      </header>

      <main className="relative bg-[url('./images/foodChain-bg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-10 space-y-6 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-relaxed md:leading-snug w-full md:w-3/4">
            Fuel Your Food Business{" "}
            <span className="text-black bg-white px-2">
              With A Complete Technology Solution
            </span>
          </h1>

          <ul className="flex flex-wrap justify-center gap-6 text-white text-lg font-medium">
            <li className="flex items-center space-x-2">
              <Icon path="M4 6h16M4 12h16M4 18h7" />
              <span>Ordering Tech</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icon path="M9 17v-2h6v2m-7-6h8l2 4H5l2-4z" />
              <span>Delivery Tech</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icon path="M3 7h18M3 12h18M3 17h18" />
              <span>Management Tech</span>
            </li>
          </ul>

          <button className="bg-orange-300 hover:bg-orange-400 text-black px-7 py-3 text-xl rounded-md font-bold shadow-md transition duration-300">
            Book Your Free Demo
          </button>

          <p className="text-white font-semibold text-2xl w-full md:w-9/12">
            From Planning To Promoting, Leverage The Most Advanced Food Delivery
            App Development Services—Backed By Top Industry Experts At Every
            Step.
          </p>
        </div>
      </main>
      <section className="flex flex-col md:flex-row items-center justify-start bg-black text-white p-6 min-h-[60vh]">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Complete Food Ordering <br />
            <span className="text-orange-500">Tech Suite At Your Disposal</span>
          </h2>
          <p className="text-lg">
            Empower your food business growth leveraging our feature-loaded
            ordering solution.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-white border border-transparent hover:border-white transition">
            Book Demo - It's Free!
          </button>
          <p className="text-sm text-gray-300">
            Zero-Commission Selling | Unlimited Online Orders | Fast & Secure
          </p>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-end gap-10">
        <div className="relative w-full max-w-2xl flex items-center justify-start">
          <img
            src="src/images/foodChain-1.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl"
          />
        </div>
        <div className="max-w-2xl space-y-6 text-center lg:text-left">
          <p className="text-orange-500 font-semibold text-lg">Do You Know?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            52% of Consumers Prefer Ordering <br />
            <span className="text-black">
              Food Directly From The Restaurant
            </span>
          </h2>
          <p className="text-gray-700 text-lg">
            Why not get unique & advanced online ordering software for your
            restaurant to:
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              ["Increase Number Of Food Orders"],
              ["Avoid Paying Third-Party Commissions"],
              ["Boost Customer Ordering Experience"],
            ].map((text, index) => (
              <div
                key={index}
                className="bg-orange-100 p-4 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-2">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <button className="bg-orange-300 hover:bg-orange-400 text-black px-7 py-3 text-xl rounded-md font-bold shadow-md transition duration-300">
            Book Your Free Demo
          </button>
        </div>
      </section>
      <section className="bg-[#f4f7ff] py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text on the left */}
        <div className="max-w-xl space-y-6 text-start lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Launch Your Branded <br /> Food Ordering App & Website
          </h2>

          <div className="bg-indigo-100 text-indigo-800 italic p-3 rounded-md w-fit font-semibold mx-auto lg:mx-0 text-sm">
            <strong>In The Stats:</strong> 45% of customers say a mobile
            application for restaurants encourages them to order more often.
          </div>

          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-orange-500 mt-1">◎</span>
              <p>
                Give your customers a reason to love you more with customized
                iOS and Android apps, built exclusively for your food business.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-orange-500 mt-1">◎</span>
              <p>
                Build your own user-friendly & fully-responsive website to let
                your customers order at their ease.
              </p>
            </li>
          </ul>

          <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 hover:border border-1 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
            Get Started
          </button>
        </div>

        {/* Image on the right */}
        <div className="relative w-full max-w-2xl flex items-center justify-end">
          <img
            src="src/images/foodChain-2.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl"
          />
        </div>
      </section>
      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center justify-end gap-12">
        <div className="relative w-full max-w-2xl flex items-center justify-start">
          <img
            src="src/images/foodChain-3.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Create & Manage Menu To Simplify Ordering
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>In The Stats:</strong> 57% of restaurateurs believe that
            having an optimized menu increases sales by 6X.
          </div>
          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Let your customers filter their search for their favorite food
                items listed on the app & website.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Enhance their ordering experience with intuitive UI & a
                beautifully laid out restaurant listing.
              </p>
            </li>
          </ul>
          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Optimize Your Online Menu →
          </button>
        </div>
      </section>
      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content on the left */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Simplified Ordering & Real-time Tracking
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>In The Stats:</strong> The ability to track orders in
            real-time increases overall satisfaction by 73%
          </div>

          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Provide your customers with the flexibility to place new orders
                instantly, repeat old orders, or even schedule them for later.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Enable them to track their food orders in real-time, right from
                placing an order to getting it delivered at their doorstep.
              </p>
            </li>
          </ul>

          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Enable Tracking Food Orders →
          </button>
        </div>

        {/* Image on the right */}
        <div className="relative w-full max-w-2xl flex items-center justify-end">
          <img
            src="src/images/foodChain-4.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
      </section>

      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center justify-end gap-12">
        <div className="relative w-full max-w-2xl flex items-center justify-start">
          <img
            src="src/images/foodChain-5.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Instant Notifications & In-App Chat Support
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>The Fact:</strong> Customer satisfaction ratings for live
            chat are 5 times higher than other support channels.
          </div>
          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Keep your customers notified with proper ETAs, presenting the
                status of their orders & other details
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Make it easy for them to reach the delivery agents in real-time
                through integrates chat support system.
              </p>
            </li>
          </ul>
          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Provide Chat Support →
          </button>
        </div>
      </section>
      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text on the left */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Payment Gateways & Customer Feedback
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>In the Stats:</strong> While 56% of customers prefer paying
            online, 70% of them read at least four reviews before they order.
          </div>

          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Facilitate your customers with easy online payments with
                multiple payment gateways integrated.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Let them share their honest reviews & feedbacks to boost trust
                among your potential customers.
              </p>
            </li>
          </ul>

          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Simplify Payments & Feedback →
          </button>
        </div>

        {/* Image on the right */}
        <div className="flex w-full max-w-2xl items-center justify-end">
          <img
            src="src/images/foodChain-6.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
      </section>

      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center justify-end gap-12">
        <div className="relative w-full max-w-2xl flex items-center justify-start">
          <img
            src="src/images/foodChain-7.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Offer Loyalty Points & Discounts
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>In the Stats:</strong>80% of consumers feel encouraged to
            place more order when the find an offer or discount.
          </div>
          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Attract more customers & experience recurring sales with
                exciting discounts, promo codes, offers, etc.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Boost brand loyalty offering reward points that could be later
                used to earn discounts on their next order.
              </p>
            </li>
          </ul>
          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Promote Your Online Food Business →
          </button>
        </div>
      </section>

      <section className="bg-[#ffffff] py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text on the left */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Table Booking & Takeaway Deals
          </h2>

          <div className="bg-indigo-100 text-indigo-800 font-semibold italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm">
            <strong>In the Stats:</strong> Over 80% restaurants are turning to
            technology like online table reservation & takeaway to grow their
            business.
          </div>

          <ul className="space-y-4 text-left text-gray-700 mt-4">
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Give your customers an option to place an order, make payment &
                schedule an offline takeaway.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-2xl text-black mt-1">◎</span>
              <p>
                Provide them with a higher level of service with our restaurant
                booking software that manages your reservations.
              </p>
            </li>
          </ul>

          <button className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold">
            Enable Reservations & Takeaways →
          </button>
        </div>

        {/* Image on the right */}
        <div className="w-full max-w-2xl flex items-center justify-end">
          <img
            src="src/images/foodChain-8.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full max-w-xl max-h-fit"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FoodChain;
