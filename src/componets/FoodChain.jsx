import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// SVG Icon component
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

// Reusable components for better organization
const StatBlock = memo(({ strongText, text }) => (
  <div className="bg-indigo-100 text-indigo-800 italic p-3 rounded-md w-fit mx-auto lg:mx-0 text-sm font-semibold">
    <strong>{strongText}</strong> {text}
  </div>
));

const BenefitItem = memo(({ symbol, text, symbolColor = "text-black" }) => (
  <li className="flex items-start space-x-3">
    <span className={`text-2xl ${symbolColor} mt-1`}>◎</span>
    <p>{text}</p>
  </li>
));

const ActionButton = memo(({ text, isGradient, hasArrow, onClick }) => {
  if (isGradient) {
    return (
      <button 
        onClick={onClick}
        className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 hover:border border-1 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
      >
        {text}
      </button>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className="bg-white hover:underline text-black px-7 py-3 text-xl font-bold"
    >
      {text} {hasArrow && "→"}
    </button>
  );
});

const PrimaryButton = memo(({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-orange-300 hover:bg-orange-400 text-black px-7 py-3 text-xl rounded-md font-bold shadow-md transition duration-300"
  >
    {text}
  </button>
));

const ContentSection = memo(({ 
  title, 
  statistic, 
  benefits, 
  buttonText, 
  imageSrc, 
  imageAlt, 
  imageFirst = false,
  isGradientButton = false
}) => {
  const ImageContent = (
    <div className="relative w-full max-w-xl h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg shadow-md">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  const TextContent = (
    <div className="max-w-xl space-y-6 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>

      {statistic && <StatBlock {...statistic} />}

      <ul className="space-y-4 text-left text-gray-700 mt-4">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </ul>

      <ActionButton 
        text={buttonText} 
        isGradient={isGradientButton} 
        hasArrow={!isGradientButton}
      />
    </div>
  );

  return (
    <section className="bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {imageFirst ? (
        <>
          {ImageContent}
          {TextContent}
        </>
      ) : (
        <>
          {TextContent}
          {ImageContent}
        </>
      )}
    </section>
  );
});

// Main component
const FoodChain = () => {
  // Define content sections to avoid repeating structure
  const contentSections = useMemo(() => [
    {
      title: "Launch Your Branded Food Ordering App & Website",
      statistic: {
        strongText: "In The Stats:",
        text: "45% of customers say a mobile application for restaurants encourages them to order more often."
      },
      benefits: [
        {
          text: "Give your customers a reason to love you more with customized iOS and Android apps, built exclusively for your food business.",
          symbolColor: "text-orange-500"
        },
        {
          text: "Build your own user-friendly & fully-responsive website to let your customers order at their ease.",
          symbolColor: "text-orange-500"
        }
      ],
      buttonText: "Get Started",
      imageSrc: "src/images/foodChain-2.jpg",
      imageAlt: "Food Ordering App and Website Preview",
      isGradientButton: true
    },
    {
      title: "Create & Manage Menu To Simplify Ordering",
      statistic: {
        strongText: "In The Stats:",
        text: "57% of restaurateurs believe that having an optimized menu increases sales by 6X."
      },
      benefits: [
        {
          text: "Let your customers filter their search for their favorite food items listed on the app & website."
        },
        {
          text: "Enhance their ordering experience with intuitive UI & a beautifully laid out restaurant listing."
        }
      ],
      buttonText: "Optimize Your Online Menu",
      imageSrc: "src/images/foodChain-3.jpg",
      imageAlt: "Food Menu Management Interface",
      imageFirst: true
    },
    {
      title: "Simplified Ordering & Real-time Tracking",
      statistic: {
        strongText: "In The Stats:",
        text: "The ability to track orders in real-time increases overall satisfaction by 73%"
      },
      benefits: [
        {
          text: "Provide your customers with the flexibility to place new orders instantly, repeat old orders, or even schedule them for later."
        },
        {
          text: "Enable them to track their food orders in real-time, right from placing an order to getting it delivered at their doorstep."
        }
      ],
      buttonText: "Enable Tracking Food Orders",
      imageSrc: "src/images/foodChain-4.jpg",
      imageAlt: "Real-time Order Tracking Interface"
    },
    {
      title: "Instant Notifications & In-App Chat Support",
      statistic: {
        strongText: "The Fact:",
        text: "Customer satisfaction ratings for live chat are 5 times higher than other support channels."
      },
      benefits: [
        {
          text: "Keep your customers notified with proper ETAs, presenting the status of their orders & other details"
        },
        {
          text: "Make it easy for them to reach the delivery agents in real-time through integrates chat support system."
        }
      ],
      buttonText: "Provide Chat Support",
      imageSrc: "src/images/foodChain-5.jpg",
      imageAlt: "In-App Chat Support Interface",
      imageFirst: true
    },
    {
      title: "Payment Gateways & Customer Feedback",
      statistic: {
        strongText: "In the Stats:",
        text: "While 56% of customers prefer paying online, 70% of them read at least four reviews before they order."
      },
      benefits: [
        {
          text: "Facilitate your customers with easy online payments with multiple payment gateways integrated."
        },
        {
          text: "Let them share their honest reviews & feedbacks to boost trust among your potential customers."
        }
      ],
      buttonText: "Simplify Payments & Feedback",
      imageSrc: "src/images/foodChain-6.jpg",
      imageAlt: "Payment and Feedback Interface"
    },
    {
      title: "Offer Loyalty Points & Discounts",
      statistic: {
        strongText: "In the Stats:",
        text: "80% of consumers feel encouraged to place more order when the find an offer or discount."
      },
      benefits: [
        {
          text: "Attract more customers & experience recurring sales with exciting discounts, promo codes, offers, etc."
        },
        {
          text: "Boost brand loyalty offering reward points that could be later used to earn discounts on their next order."
        }
      ],
      buttonText: "Promote Your Online Food Business",
      imageSrc: "src/images/foodChain-7.jpg",
      imageAlt: "Loyalty Program Interface",
      imageFirst: true
    },
    {
      title: "Table Booking & Takeaway Deals",
      statistic: {
        strongText: "In the Stats:",
        text: "Over 80% restaurants are turning to technology like online table reservation & takeaway to grow their business."
      },
      benefits: [
        {
          text: "Give your customers an option to place an order, make payment & schedule an offline takeaway."
        },
        {
          text: "Provide them with a higher level of service with our restaurant booking software that manages your reservations."
        }
      ],
      buttonText: "Enable Reservations & Takeaways",
      imageSrc: "src/images/foodChain-8.jpg",
      imageAlt: "Table Booking Interface"
    }
  ], []);

  // Define features for hero section
  const heroFeatures = useMemo(() => [
    { 
      icon: "M4 6h16M4 12h16M4 18h7", 
      text: "Ordering Tech" 
    },
    { 
      icon: "M9 17v-2h6v2m-7-6h8l2 4H5l2-4z", 
      text: "Delivery Tech" 
    },
    { 
      icon: "M3 7h18M3 12h18M3 17h18", 
      text: "Management Tech" 
    }
  ], []);

  // Define benefit cards in the second section
  const benefitCards = useMemo(() => [
    "Increase Number Of Food Orders",
    "Avoid Paying Third-Party Commissions",
    "Boost Customer Ordering Experience"
  ], []);

  return (
    <>
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow">
        <div className="navbar flex justify-start pl-5 py-3">
          <Link to="/" className="font-bold text-xl text-black">
            <span className="text-[#cdcd32]">Food</span> Chain
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('./images/foodChain-bg.jpg')] bg-cover bg-center h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-0" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-10 space-y-6 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-relaxed md:leading-snug w-full md:w-3/4">
            Fuel Your Food Business{" "}
            <span className="text-black bg-white px-2">
              With A Complete Technology Solution
            </span>
          </h1>

          <ul className="flex flex-wrap justify-center gap-6 text-white text-lg font-medium">
            {heroFeatures.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Icon path={feature.icon} />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <PrimaryButton text="Book Your Free Demo" />

          <p className="text-white font-semibold text-2xl w-full md:w-9/12">
            From Planning To Promoting, Leverage The Most Advanced Food Delivery
            App Development Services—Backed By Top Industry Experts At Every
            Step.
          </p>
        </div>
      </section>

      {/* Dark Section */}
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
          <ActionButton 
            text="Book Demo - It's Free!" 
            isGradient={true} 
          />
          <p className="text-sm text-gray-300">
            Zero-Commission Selling | Unlimited Online Orders | Fast & Secure
          </p>
        </div>
      </section>

      {/* Custom Benefits Section */}
      <section className="bg-white py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-end gap-10">
        <div className="relative w-full max-w-2xl h-64 md:h-80 flex items-center justify-start overflow-hidden rounded-lg shadow-md">
          <img
            src="src/images/foodChain-1.jpg"
            alt="Food Ordering App and Website Preview"
            className="w-full h-full object-cover"
            loading="lazy"
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
            {benefitCards.map((text, index) => (
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

          <PrimaryButton text="Book Your Free Demo" />
        </div>
      </section>

      {/* Feature Content Sections - using the reusable component */}
      {contentSections.map((section, index) => (
        <ContentSection 
          key={index}
          {...section}
        />
      ))}
  
      <Footer />
    </>
  );
};

export default memo(FoodChain);