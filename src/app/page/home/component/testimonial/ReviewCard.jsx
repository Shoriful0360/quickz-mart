import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const ReviewCard = () => {
  return (
    <div className=''>
          <div className="sm:my-10">
                {/* top content */}
                <div className=''>
                      <h3 className='text-3xl font-bold text-center my-3'>
                        What Our Users Say
                    </h3>
                    <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                        Read authentic reviews from real users sharing their experiences. Your feedback helps
                        <br className="hidden sm:inline" /> us grow and serve you better every day.
                    </p>
                </div>

                    {/* responsive cart */}
                <Marquee 
                className="py-20"
                >
                       <div className="relative bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 text-white shadow-2xl rounded-2xl border-2 border-white/30 p-6 max-w-md  text-center ">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl"></div>

      {/* Image top center */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative w-32 h-32">
          <Image
            fill
            src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            alt="reviewer"
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Quotes */}
      <div className="mt-20 relative z-10">
        <p className="text-6xl text-yellow-300 drop-shadow-lg">
          <RiDoubleQuotesL />
        </p>
        <p className="text-lg mt-2 italic leading-relaxed text-white/90">
          "This university changed my life. The teachers are very supportive and
          the environment is perfect for learning. I am truly grateful for the
          experiences and opportunities I got here."
        </p>
        <p className="text-6xl text-yellow-300 drop-shadow-lg text-end">
          <RiDoubleQuotesR />
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="mt-6 relative z-10">
        <h3 className="font-bold text-2xl text-yellow-200 drop-shadow-md">
          John Doe
        </h3>
        <p className="text-sm text-white/80">Student, Computer Science</p>
      </div>
    </div>
                </Marquee>
                </div>
    </div>
  );
};

export default ReviewCard;