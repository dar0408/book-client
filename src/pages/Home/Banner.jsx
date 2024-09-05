

// import React from 'react'
// import BannerCard from '../shared/BannerCard'

// export const Banner = () => {
//     return (
//         <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
//             <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
//                 {/* right side */}
//                 <div className='md:w-1/2 h-full'>
//                     <BannerCard />
//                 </div>

//                 {/* left side */}
//                 <div className='md:w-1/2 space-y-8'>
//                     <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
//                         Buy and sell your books <span className='text-blue-700'>for the best prices</span>
//                     </h1>
//                     <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
//                     <div className='flex'>
//                         <input 
//                             type="search" 
//                             placeholder='Search a book here' 
//                             className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700' 
//                         />
//                         <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'>
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
//         </div>
//     )
// }



// // src/components/Banner.jsx
// import React, { useState } from 'react';
// import BannerCard from '../shared/BannerCard';

// export const Banner = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
//       <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
//         {/* right side */}
//         <div className='md:w-1/2 h-full'>
//           <BannerCard searchTerm={searchTerm} />
//         </div>

//         {/* left side */}
//         <div className='md:w-1/2 space-y-8'>
//           <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
//             Buy and sell your books <span className='text-blue-700'>for the best prices</span>
//           </h1>
//           <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
//           <div className='flex'>
//             <input
//               type="search"
//               placeholder='Search a book here'
//               className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700'
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
//     </div>
//   );
// };

// export default Banner;


// // src/components/Banner.jsx
// import React, { useState, useEffect } from 'react';
// import BannerCard from '../shared/BannerCard';

// export const Banner = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   useEffect(() => {
//     // Fetch all books when the component mounts
//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     // Filter books based on search term (case-insensitive)
//     if (searchTerm) {
//       setIsSearching(true);
//       const filtered = books.filter(book => 
//         book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBooks(filtered);
//     } else {
//       setIsSearching(false);
//       setFilteredBooks(books); // Show all books with animation if no search term
//     }
//   }, [searchTerm, books]);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch('https://book-server-chi.vercel.app/all-books');
//       if (response.ok) {
//         const data = await response.json();
//         setBooks(data);
//         setFilteredBooks(data); // Initialize with all books
//       } else {
//         console.error('Failed to fetch books:', response.status);
//       }
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   return (
//     <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
//       <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
//         {/* right side */}
//         <div className='md:w-1/2 h-full'>
//           <BannerCard filteredBooks={filteredBooks} isSearching={isSearching} />
//         </div>

//         {/* left side */}
//         <div className='md:w-1/2 space-y-8'>
//           <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
//             Buy and sell your books <span className='text-blue-700'>for the best prices</span>
//           </h1>
//           <p>
//             Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
//           </p>
//           <div className='flex'>
//             <input 
//               type="search" 
//               placeholder='Search a book here' 
//               className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700' 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button 
//               className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import BannerCard from '../shared/BannerCard';

// export const Banner = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   useEffect(() => {
//     // Fetch all books when the component mounts
//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     // Filter books based on search term (case-insensitive)
//     if (searchTerm) {
//       const filtered = books.filter(book =>
//         book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBooks(filtered);
//     } else {
//       setFilteredBooks(books); // Show all books with animation if no search term
//     }
//   }, [searchTerm, books]);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch('https://book-server-chi.vercel.app/all-books');
//       if (response.ok) {
//         const data = await response.json();
//         setBooks(data);
//         setFilteredBooks(data); // Initialize with all books
//       } else {
//         console.error('Failed to fetch books:', response.status);
//       }
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   return (
//     <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
//       <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
//         {/* right side */}
//         <div className='md:w-1/2 h-full'>
//           <BannerCard filteredBooks={filteredBooks} />
//         </div>

//         {/* left side */}
//         <div className='md:w-1/2 space-y-8'>
//           <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
//             Buy and sell your books <span className='text-blue-700'>for the best prices</span>
//           </h1>
//           <p>
//             Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
//           </p>
//           <div className='flex'>
//             <input 
//               type="search" 
//               placeholder='Search a book here' 
//               className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700' 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button 
//               className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'
//               onClick={() => setSearchTerm(searchTerm)}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
//     </div>
//   );
// };



import React, { useState, useEffect } from 'react';
import BannerCard from '../shared/BannerCard';

export const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    // Fetch all books when the component mounts
    fetchBooks();
  }, []);

  useEffect(() => {
    // Filter books based on search term (case-insensitive)
    if (searchTerm) {
      const filtered = books.filter(book =>
        book.bookTitle && book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books); // Show all books if no search term
    }
  }, [searchTerm, books]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://book-server-chi.vercel.app/all-books');
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); // Initialize with all books
      } else {
        console.error('Failed to fetch books:', response.status);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className='relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40 lg:px-24 px-4'>
        {/* right side */}
        <div className='md:w-1/2 h-full'>
          <BannerCard filteredBooks={filteredBooks} />
        </div>

        {/* left side */}
        <div className='md:w-1/2 space-y-8'>
          <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>
            Buy and sell your books <span className='text-blue-700'>for the best prices</span>
          </h1>
          <p>
            Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.
          </p>
          <div className='flex'>
            <input 
              type="search" 
              placeholder='Search a book here' 
              className='py-2 px-4 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-blue-700' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-lg'
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-300 to-transparent'></div>
    </div>
  );
};
