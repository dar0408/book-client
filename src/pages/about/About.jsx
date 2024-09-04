
import React, { useRef } from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";
import Review from '../Home/Review'; // Import the Review component

const About = () => {
  const reviewRef = useRef(null); // Create a ref for the Review section

  // Function to scroll to the Review section
  const scrollToReview = () => {
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='mt-20'>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Background SVG */}
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              {/* About content */}
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Image */}
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              {/* More content */}
            </div>
          </div>
        </div>
      </div>

      {/* Button to scroll to the Review section */}
      <div className="flex justify-center mt-10">
        <button onClick={scrollToReview} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Jump to Reviews
        </button>
      </div>

      {/* Review section */}
      <div ref={reviewRef}> {/* Add ref to the Review section */}
        <Review />
      </div>
    </div>
  );
};

export default About;
