// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// // react icons
// import { FaStar } from 'react-icons/fa6'
// import { Avatar } from 'flowbite-react';
// import profile from "../../assets/profile.jpg"
// import ReviewCard from '../shared/ReviewCard';

// const Review = () => {
//     return (
//         <div className='my-12 px-4 lg:px-24'>
//             <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

//             {/* reviews card */}
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 20,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 40,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 50,
//                     },
//                 }}
//                 className="mySwiper"
//             >
//                 <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//                     <div className='space-y-6'>
//                         <div className='text-amber-500 flex gap-2'>
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                         </div>

//                         {/* texts */}
//                         <div className='mt-7'>
//                             <p className='mb-5'>I received this book as a gift and was pleasantly surprised by how much I enjoyed it. The author's descriptive language painted vivid pictures, and I found myself transported to another world." - Laura W.</p>
//                             {/* <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p> */}
//                             <Avatar
//                                 alt="avatar of Jese"
//                                 img={profile}
//                                 rounded
//                                 className='w-10 mb-4'
//                             />
//                             <h5 className='text-lg font-medium'>Darpan</h5>
//                             <p className='text-sm'>.............</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//                     <ReviewCard />
//                 </SwiperSlide>
//                 <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//                     <ReviewCard />
//                 </SwiperSlide>
//                 <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//                     <ReviewCard />
//                 </SwiperSlide>
//                 <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//                     <ReviewCard />
//                 </SwiperSlide>
//             </Swiper>

//             <div className='h-20'></div>
//         </div>
//     )
// }

// export default Review


// Review.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Book Reviews</h2>

            {/* Reviews cards */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>I absolutely loved this book! The characters were well-developed, and the plot kept me hooked until the very end." - Sarah Johnson</p>
                            <Avatar
                                alt="avatar of Sarah"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Sarah Johnson</h5>
                            <p className='text-sm'>Teacher, New York</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>This book was a rollercoaster of emotions! I laughed, I cried, and I couldn't put it down." - Rajesh Patel</p>
                            <Avatar
                                alt="avatar of Rajesh"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Rajesh Patel</h5>
                            <p className='text-sm'>Software Engineer, Mumbai</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>This book changed my perspective on life. The writing was beautiful and profound." - Priya Sharma</p>
                            <Avatar
                                alt="avatar of Priya"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Priya Sharma</h5>
                            <p className='text-sm'>Student, Delhi</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>I absolutely loved this book! The characters were well-developed, and the plot kept me hooked until the very end." - Sarah Johnson</p>
                            <Avatar
                                alt="avatar of Sarah"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Sarah Johnson</h5>
                            <p className='text-sm'>Teacher, New York</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>This book was a rollercoaster of emotions! I laughed, I cried, and I couldn't put it down." - Rajesh Patel</p>
                            <Avatar
                                alt="avatar of Rajesh"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Rajesh Patel</h5>
                            <p className='text-sm'>Software Engineer, Mumbai</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* Review text */}
                        <div className='mt-7'>
                            <p className='mb-5'>This book changed my perspective on life. The writing was beautiful and profound." - Priya Sharma</p>
                            <Avatar
                                alt="avatar of Priya"
                                img={profile}
                                rounded
                                className='w-10 mb-4'
                            />
                            <h5 className='text-lg font-medium'>Priya Sharma</h5>
                            <p className='text-sm'>Student, Delhi</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            

            <div className='h-20'></div>
        </div>
    )
}

export default Review;
