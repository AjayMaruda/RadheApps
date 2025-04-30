import React, { memo } from 'react';
import Aurora from '../../ReactBits/Aurora';
import DeloitteLogo from '../../src/images/deloitte.png';
import ClutchLogo from '../../src/images/clutch.png';
import BusinessLogo from'../../src/images/bussi.png';
import EntrepreneurLogo from '../images/entre.png';
import DeveloperLogo from '../images/dev.png';

const AchievementsSection = memo(() => {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 z-[-1]">
        <Aurora />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-20 gap-y-4 mb-8 ease-in-out duration-300">
          <img src={DeloitteLogo} alt="Deloitte" className="h-28" />
          <img src={ClutchLogo} alt="Clutch Global" className="h-28" />
          <img src={EntrepreneurLogo} alt="Entrepreneur" className="h-28" />
          <img src={BusinessLogo} alt="Business of Apps" className="h-28" />
          <img src={ClutchLogo} alt="Clutch Champion" className="h-28" />
          <img src={DeveloperLogo} alt="Top App Development" className="h-28" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16">
          <div className="text-center mb-8 transition-opacity ease-in-out duration-300 pb-8 gap-y-0">
            <h2 className="text-5xl flex justify-start font-bold text-gray-800 mb-3">
              Architecting Digital Excellence
            </h2>
            <p className="text-5xl flex font-bold justify-start text-gray-600">
              For <span className="font-bold text-indigo-600 gap-2">5,000+</span> Industry Leaders
            </p>
          </div>
          {/* <div className="mr-4">
              <span className="text-3xl md:text-4xl font-bold text-blue-700">2,600+</span>
              <span className="text-gray-700">Business Ventures Transformed</span>
            </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-indigo-600 block mb-1">8+</span>
              <p className="text-gray-700 text-sm">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-green-600 block mb-1">11+</span>
              <p className="text-gray-700 text-sm">Global Awards</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-yellow-600 block mb-1">50+</span>
              <p className="text-gray-700 text-sm">Expert Team Members</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-bold text-red-600 block mb-1">25+</span>
              <p className="text-gray-700 text-sm">Successful Projects</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center md:justify-start">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AchievementsSection;