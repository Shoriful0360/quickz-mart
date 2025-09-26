"use client"; // Next.js 15+ Turbopack এর জন্য client component

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Verified reviews
const verifiedReview = [
  {
    _id: "1",
    name: "John Doe",
    profession: "Web Developer",
    image: "/images/user1.jpg",
    review: "This product is amazing! I highly recommend it.",
    reviewTime: "2025-09-26T10:30:00Z",
  },
  {
    _id: "2",
    name: "Jane Smith",
    profession: "Graphic Designer",
    image: "/images/user2.jpg",
    review: "Very useful and easy to use. Great support team.",
    reviewTime: "2025-09-25T14:15:00Z",
  },
  {
    _id: "3",
    name: "Alex Johnson",
    profession: "Content Writer",
    image: "/images/user3.jpg",
    review: "I loved the experience. Will use it again for sure!",
    reviewTime: "2025-09-24T09:45:00Z",
  },
];


const ReviewCard = () => {
  const allVerifiedReview = verifiedReview.sort(
    (a, b) => new Date(b.reviewTime) - new Date(a.reviewTime)
  );

  return (
    <div className="">
      <div className="px-4 sm:px-10">
        <div className="sm:my-10">
          <h3 className="text-3xl font-bold text-center my-3">
            What Our Users Say
          </h3>
          <p className="text-sm font-bold text-center my-3 text-gray-600 px-6">
            Read authentic reviews from real users sharing their experiences.
            Your feedback helps
            <br className="hidden sm:inline" /> us grow and serve you better every
            day.
          </p>
        </div>

        <div className="">
          <Swiper
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            grabCursor={false}
            allowTouchMove={false}
            freeMode={true}
          >
            {allVerifiedReview.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="relative py-16 h-[450px]">
                  <img
                    className="absolute rounded-full border-4 border-white top-4 w-28 h-28 bg-white left-36 md:left-20 lg:left-40"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="bg-[#EDE8E0] border border-gray-200 rounded-xl py-12 text-gray-700 px-6 h-[350px]">
                    <p className="text-5xl">
                      <RiDoubleQuotesL />
                    </p>
                    <p className="text-sm font-bold text-center">{review.review}</p>
                    <p className="text-5xl ml-[290px] md:ml-[170px] lg:ml-[335px]">
                      <RiDoubleQuotesR />
                    </p>
                    <p className="text-lg font-bold text-center text-black">
                      {review.name}
                    </p>
                    <p className="text-sm font-bold text-center mb-5 text-black">
                      {review.profession}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
