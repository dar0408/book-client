// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // banner card styles
// import './bannerCard.css'

// // import required modules
// import { EffectCards } from 'swiper/modules';

// function BannerCard() {
//   return (
//     <div className='banner-card'>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default BannerCard


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// function BannerCard() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch images from the server
//     axios.get('http://localhost:5000/all-books')
//       .then(response => {
//         // Extract image URLs from the response data
//         const imageUrls = response.data.map(book => book.imageURL);
//         // Update state with image URLs
//         setImages(imageUrls);
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//   }, []);

//   return (
//     <div className='banner-card'>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         className="mySwiper"
//       >
//         {images.map((imageURL, index) => (
//           <SwiperSlide key={index} style={{ backgroundImage: `url(${imageURL})` }}>
//             {/* Optionally, you can add alt text for accessibility */}
//             <img src={imageURL} alt={`Image ${index}`} style={{ display: 'none' }} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default BannerCard;

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './bannerCard.css';
import { EffectCards } from 'swiper/modules';

function BannerCard() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch image URLs from the server
    fetchImageUrls();
  }, []);

  const fetchImageUrls = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-books');
      if (response.ok) {
        const data = await response.json();
        // Extract image URLs from the response data
        const urls = data.map(book => book.imageURL);
        setImageUrls(urls);
      } else {
        console.error('Failed to fetch image URLs:', response.status);
      }
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  return (
    <div className='banner-card'>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {imageUrls.map((url, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${url})` }}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerCard;
