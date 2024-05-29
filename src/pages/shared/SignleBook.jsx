// // import React from 'react';
// // import { useLoaderData } from 'react-router-dom';
// // import { Banner } from 'flowbite-react';
// // import { HiX } from 'react-icons/hi';
// // import { MdAnnouncement } from 'react-icons/md';

// // const SingleBook = () => {
// //     const data = useLoaderData();
// //     const { bookTitle, authorName, imageURL, category, bookDescription, price } = data;

// //     return (
// //         <div className='mt-20'>
// //             <Banner>
// //                 <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
// //                     <div className="flex items-center mx-auto">
// //                         <p className="flex items-center text-2xl font-normal text-black">
// //                             <MdAnnouncement className='me-2 text-red-600' />
// //                             <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
// //                         </p>
// //                     </div>
// //                     <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
// //                         <HiX className="h-4 w-4" />
// //                     </Banner.CollapseButton>
// //                 </div>
// //             </Banner>

// //             {/* Book details */}
// //             <div className='flex p-6'>
// //                 <div className='w-1/4'>
// //                     <img src={imageURL} alt={bookTitle} className='w-full h-auto' />
// //                 </div>
// //                 <div className='w-3/4 pl-6'>
// //                     <h2 className='text-2xl font-bold mb-2'>{bookTitle}</h2>
// //                     <p className='text-xl mb-2'>Author: <span className='font-semibold'>{authorName}</span></p>
// //                     <p className='text-lg mb-2'>Category: <span className='font-semibold'>{category}</span></p>
// //                     <p className='text-lg mb-2'>Amount: <span className='font-semibold'>${price}</span></p>
// //                     <h3 className='text-xl font-semibold mt-4 mb-2'>Description:</h3>
// //                     <p className='text-base leading-relaxed'>{bookDescription}</p>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default SingleBook;


// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { Banner, Button } from 'flowbite-react';
// import { HiX, HiShoppingCart } from 'react-icons/hi';
// import { MdAnnouncement } from 'react-icons/md';
// import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';

// const SingleBook = () => {
//     const data = useLoaderData();
//     const { bookTitle, authorName, imageURL, category, bookDescription, price } = data;
//     const [cartCount, setCartCount] = useState(0);

//     const handleAddToCart = () => {
//         setCartCount(cartCount + 1);
//     };

//     return (
//         <div className='mt-20'>
//             <Banner>
//                 <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
//                     <div className="flex items-center mx-auto">
//                         <p className="flex items-center text-2xl font-normal text-black">
//                             <MdAnnouncement className='me-2 text-red-600' />
//                             <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
//                         </p>
//                     </div>
//                     <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
//                         <HiX className="h-4 w-4" />
//                     </Banner.CollapseButton>
//                 </div>
//             </Banner>

//             {/* Book details */}
//             <div className='flex p-6'>
//                 <div className='w-1/4'>
//                     <img src={imageURL} alt={bookTitle} className='w-full h-auto' />
//                 </div>
//                 <div className='w-3/4 pl-6'>
//                     <h2 className='text-2xl font-bold mb-2'>{bookTitle}</h2>
//                     <p className='text-xl mb-2'>Author: <span className='font-semibold'>{authorName}</span></p>
//                     <p className='text-lg mb-2'>Category: <span className='font-semibold'>{category}</span></p>
//                     <p className='text-lg mb-2'>Amount: <span className='font-semibold'>${price}</span></p>
//                     <h3 className='text-xl font-semibold mt-4 mb-2'>Description:</h3>
//                     <p className='text-base leading-relaxed'>{bookDescription}</p>
                    
//                     {/* Buttons */}
//                     <div className='mt-4 flex items-center'>
//                         <Button color="green" className='mr-4'>
//                             <FaCreditCard className='mr-2' /> Buy Now
//                         </Button>
//                         <Button color="blue" onClick={handleAddToCart}>
//                             <FaShoppingCart className='mr-2' /> Add to Cart
//                         </Button>
//                     </div>

//                     {/* Cart count display */}
//                     <div className='mt-4 text-lg'>
//                         <HiShoppingCart className='inline-block mr-2' /> Cart: {cartCount}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SingleBook;



import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Banner, Button, Textarea, Label, TextInput } from 'flowbite-react';
import { HiX, HiShoppingCart } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';

// Review Component
const Review = ({ author, rating, text }) => {
    return (
        <div className='border rounded p-4 mb-4 shadow'>
            <h4 className='text-xl font-semibold'>{author}</h4>
            <div className='flex items-center mb-2'>
                <span className='text-yellow-500'>
                    {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </span>
            </div>
            <p>{text}</p>
        </div>
    );
};

// Main Book Component
const SingleBook = () => {
    const data = useLoaderData();
    const { bookTitle, authorName, imageURL, category, bookDescription, price } = data;
    const [cartCount, setCartCount] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewAuthor, setReviewAuthor] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            author: reviewAuthor,
            text: reviewText,
            rating: reviewRating,
        };
        setReviews([newReview, ...reviews]);
        setReviewAuthor('');
        setReviewText('');
        setReviewRating(0);
    };

    return (
        <div className='mt-20'>
            <Banner>
                <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* Book details */}
            <div className='flex p-6'>
                <div className='w-1/4'>
                    <img src={imageURL} alt={bookTitle} className='w-full h-auto' />
                </div>
                <div className='w-3/4 pl-6'>
                    <h2 className='text-2xl font-bold mb-2'>{bookTitle}</h2>
                    <p className='text-xl mb-2'>Author: <span className='font-semibold'>{authorName}</span></p>
                    <p className='text-lg mb-2'>Category: <span className='font-semibold'>{category}</span></p>
                    <p className='text-lg mb-2'>Amount: <span className='font-semibold'>${price}</span></p>
                    <h3 className='text-xl font-semibold mt-4 mb-2'>Description:</h3>
                    <p className='text-base leading-relaxed'>{bookDescription}</p>
                    
                    {/* Buttons */}
                    <div className='mt-4 flex items-center'>
                        <Button color="green" className='mr-4'>
                            <FaCreditCard className='mr-2' /> Buy Now
                        </Button>
                        <Button color="blue" onClick={handleAddToCart}>
                            <FaShoppingCart className='mr-2' /> Add to Cart
                        </Button>
                    </div>

                    {/* Cart count display */}
                    <div className='mt-4 text-lg'>
                        <HiShoppingCart className='inline-block mr-2' /> Cart: {cartCount}
                    </div>
                </div>
            </div>

            {/* Ratings & Reviews Section */}
            <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-4'>Ratings & Reviews</h3>
                <div className='flex items-center mb-4'>
                    <p className='text-xl mr-4'>What do <span className='font-semibold italic'>you</span> think?</p>
                </div>

                {/* Review Form */}
                <form onSubmit={handleReviewSubmit} className='mb-6'>
                    <div className='mb-4'>
                        <Label htmlFor='reviewAuthor' value='Your Name' />
                        <TextInput
                            id='reviewAuthor'
                            type='text'
                            value={reviewAuthor}
                            onChange={(e) => setReviewAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor='reviewText' value='Your Review' />
                        <Textarea
                            id='reviewText'
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <Label htmlFor='reviewRating' value='Rating (1 to 5)' />
                        <TextInput
                            id='reviewRating'
                            type='number'
                            min='1'
                            max='5'
                            value={reviewRating}
                            onChange={(e) => setReviewRating(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <Button type='submit' color="dark">
                        Submit Review
                    </Button>
                </form>

                {/* Display Reviews */}
                <div>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <Review
                                key={index}
                                author={review.author}
                                rating={review.rating}
                                text={review.text}
                            />
                        ))
                    ) : (
                        <p>No reviews yet. Be the first to review this book!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SingleBook;
