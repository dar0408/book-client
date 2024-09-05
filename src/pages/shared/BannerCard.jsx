

// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './bannerCard.css';
// import { EffectCards } from 'swiper/modules';

// function BannerCard() {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     // Fetch image URLs from the server
//     fetchImageUrls();
//   }, []);

//   const fetchImageUrls = async () => {
//     try {
//       const response = await fetch('https://book-server-chi.vercel.app/all-books');
//       if (response.ok) {
//         const data = await response.json();
//         // Extract image URLs from the response data
//         const urls = data.map(book => book.imageURL);
//         setImageUrls(urls);
//       } else {
//         console.error('Failed to fetch image URLs:', response.status);
//       }
//     } catch (error) {
//       console.error('Error fetching image URLs:', error);
//     }
//   };

//   return (
//     <div className='banner-card'>
//       <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
//         {imageUrls.map((url, index) => (
//           <SwiperSlide key={index} style={{ backgroundImage: `url(${url})` }}></SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;



// // src/shared/BannerCard.jsx
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './bannerCard.css';
// import { EffectCards } from 'swiper/modules';

// function BannerCard({ searchTerm }) {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   useEffect(() => {
//     // Fetch books from the server
//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     // Filter books based on search term (case-insensitive)
//     if (searchTerm) {
//       const filtered = books.filter(book =>
//         book.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredBooks(filtered);
//     } else {
//       setFilteredBooks(books);
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
//     <div className='banner-card'>
//       <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
//         {filteredBooks.map((book, index) => (
//           <SwiperSlide
//             key={index}
//             style={{ backgroundImage: `url(${book.imageURL})` }}
//             title={book.title} // Optional: Display book title on hover
//           >
//             {/* Optional: Add more details inside the slide */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;


// // src/shared/BannerCard.jsx
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './bannerCard.css';
// import { EffectCards } from 'swiper/modules';

// function BannerCard({ searchTerm }) {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   useEffect(() => {
//     // Fetch books from the server
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
//       setFilteredBooks(books);
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
//     <div className='banner-card'>
//       <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
//         {filteredBooks.map((book, index) => (
//           <SwiperSlide
//             key={index}
//             style={{ backgroundImage: `url(${book.imageURL})` }}
//             title={book.title || 'Untitled Book'} // Optional: Display book title on hover
//           >
//             {/* Optional: Add more details inside the slide */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;


// // src/shared/BannerCard.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './bannerCard.css';
// import { EffectCards } from 'swiper/modules';

// function BannerCard({ filteredBooks, isSearching }) {
//   return (
//     <div className='banner-card'>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         {filteredBooks.map((book, index) => (
//           <SwiperSlide
//             key={index}
//             style={{ backgroundImage: `url(${book.imageURL})` }}
//             title={book.title || 'Untitled Book'}
//           >
//             {/* Optionally, add more details here */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './bannerCard.css';
// import { EffectCards } from 'swiper/modules';

// function BannerCard({ filteredBooks }) {
//   return (
//     <div className='banner-card'>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book, index) => (
//             <SwiperSlide
//               key={index}
//               style={{ backgroundImage: `url(${book.imageURL})` }}
//               title={book.title || 'Untitled Book'}
//             />
//           ))
//         ) : (
//           <div className='no-results'>
//             <p>No books found</p>
//           </div>
//         )}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './bannerCard.css';
import { EffectCards } from 'swiper/modules';

function BannerCard({ filteredBooks }) {
  return (
    <div className='banner-card'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${book.imageURL})` }}
              title={book.bookTitle || 'Untitled Book'}
            />
          ))
        ) : (
          <div className='no-results'>
            <p>No books found</p>
          </div>
        )}
      </Swiper>
    </div>
  );
}

export default BannerCard;
