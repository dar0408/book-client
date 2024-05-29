// import React from 'react'
// import BannerCard from '../shared/BannerCard'

// export const Banner = () => {
//     return (
//         <div className=' bg-teal-100  px-4 lg:px-24 flex items-center'>
//             <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
//                 {/* right side */}
//                 <div className='md:w-1/2 h-full'>
//                     <BannerCard />
//                 </div>

//                 {/* left side */}
//                 <div className='md:w-1/2 space-y-8 bg-teal-100'>
//                     <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy and sell your books <span className='text-blue-700'>for the best prices</span></h1>
//                     <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
//                     <div>
//                         <input type="search" placeholder='Search a book here' className='py-2 px-2 rounded-s-sm' />
//                         <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import BannerCard from '../shared/BannerCard';

// export const Banner = () => {
//     return (
//         <div className="bg-gray-50 px-4 lg:px-24 flex items-center shadow-lg">
//             <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 shadow-md border-t border-gray-200">
//                 {/* Right side */}
//                 <div className="md:w-1/2 h-full">
//                     <BannerCard />
//                 </div>

//                 {/* Left side */}
//                 <div className="md:w-1/2 space-y-8">
//                     <h1 className="lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug">
//                         Buy and sell your books <span className="text-blue-700">for the best prices</span>
//                     </h1>
//                     <p>
//                         Find and read more books you'll love, and keep track of the books you want to read. Be part of the
//                         world's largest community of book lovers on Goodreads.
//                     </p>
//                     <div className="flex items-center">
//                         <input
//                             type="search"
//                             placeholder="Search a book here"
//                             className="py-2 px-4 rounded-l-sm border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-sm">
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };



// import { useEffect, useState } from "react";
// import { FaXmark, FaBarsStaggered, FaBlog } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const navItems = [
//         { link: "Home", path: "/" },
//         { link: "About", path: "/about" },
//         { link: "Shop", path: "/shop" },
//         { link: "Sell Your Book", path: "/admin/dashboard" },
//         { link: "Blog", path: "/blog" },
//     ];

//     return (
//         <header className="w-full bg-white fixed top-0 left-0 right-0 shadow-md transition-all ease-in duration-300">
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "bg-white" : "bg-white"}`}>
//                 <div className="flex justify-between items-center text-base gap-8">
//                     <Link to="/" className="text-2xl font-bold flex items-center gap-2">
//                         <FaBlog className="inline-block text-blue-700" />
//                         <span className="text-black">Book</span>
//                         <span className="text-blue-700">Shop</span>
//                     </Link>

//                     <ul className="md:flex space-x-12 hidden navitems">
//                         {navItems.map(({ link, path }) => (
//                             <Link key={link} to={path} className="link block text-base cursor-pointer uppercase text-black hover:text-blue-700">
//                                 {link}
//                             </Link>
//                         ))}
//                     </ul>

//                     {/* Menu button, visible on small screen */}
//                     <div className="md:hidden">
//                         <button onClick={toggleMenu} className="text-black focus:outline-none">
//                             {isMenuOpen ? (
//                                 <FaXmark className="h-6 w-6 text-black" />
//                             ) : (
//                                 <FaBarsStaggered className="h-5 w-5 text-black" />
//                             )}
//                         </button>
//                     </div>
//                 </div>

//                 <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//                     {navItems.map(({ link, path }) => (
//                         <a
//                             href={path}
//                             key={link}
//                             onClick={toggleMenu}
//                             className="block text-white hover:text-gray-500"
//                         >
//                             {link}
//                         </a>
//                     ))}
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;


import React from 'react'
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
                        Buy and sell your books <span className='text-blue-700'>for the best prices</span>
                    </h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <div className='flex'>
                        <input 
                            type="search" 
                            placeholder='Search a book here' 
                            className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700' 
                        />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
        </div>
    )
}
