
// import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { Banner, Button, Textarea, Label, TextInput } from 'flowbite-react';
// import { HiX, HiShoppingCart } from 'react-icons/hi';
// import { MdAnnouncement } from 'react-icons/md';
// import { FaShoppingCart, FaCreditCard } from 'react-icons/fa';
// import { getAuth } from 'firebase/auth'; // Make sure Firebase Auth is correctly set up

// // Review Component
// const Review = ({ author, rating, text }) => {
//     return (
//         <div className='border rounded p-4 mb-4 shadow'>
//             <h4 className='text-xl font-semibold'>{author}</h4>
//             <div className='flex items-center mb-2'>
//                 <span className='text-yellow-500'>
//                     {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
//                 </span>
//             </div>
//             <p>{text}</p>
//         </div>
//     );
// };

// // Main Book Component
// const SingleBook = () => {
//     const data = useLoaderData();
//     const { bookTitle, authorName, imageURL, category, bookDescription, price } = data;
//     const [cartCount, setCartCount] = useState(0);
//     const [reviews, setReviews] = useState([]);
//     const [reviewText, setReviewText] = useState('');
//     const [reviewRating, setReviewRating] = useState(0);
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (user) {
//             setCurrentUser(user.displayName || 'Anonymous');
//         }
//     }, []);

//     const handleAddToCart = () => {
//         setCartCount(cartCount + 1);
//     };

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (!currentUser) {
//             alert('You need to be logged in to submit a review');
//             return;
//         }
//         const newReview = {
//             author: currentUser, // Use the current user's name here
//             text: reviewText,
//             rating: reviewRating,
//         };
//         setReviews([newReview, ...reviews]);
//         setReviewText('');
//         setReviewRating(0);
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

//             {/* Ratings & Reviews Section */}
//             <div className='p-6'>
//                 <h3 className='text-2xl font-semibold mb-4'>Ratings & Reviews</h3>
//                 <div className='flex items-center mb-4'>
//                     <p className='text-xl mr-4'>What do <span className='font-semibold italic'>you</span> think?</p>
//                 </div>

//                 {/* Review Form */}
//                 <form onSubmit={handleReviewSubmit} className='mb-6'>
//                     {/* Removed review author input */}
//                     <div className='mb-4'>
//                         <Label htmlFor='reviewText' value='Your Review' />
//                         <Textarea
//                             id='reviewText'
//                             value={reviewText}
//                             onChange={(e) => setReviewText(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='mb-4'>
//                         <Label htmlFor='reviewRating' value='Rating (1 to 5)' />
//                         <TextInput
//                             id='reviewRating'
//                             type='number'
//                             min='1'
//                             max='5'
//                             value={reviewRating}
//                             onChange={(e) => setReviewRating(parseInt(e.target.value))}
//                             required
//                         />
//                     </div>
//                     <Button type='submit' color="dark">
//                         Submit Review
//                     </Button>
//                 </form>

//                 {/* Display Reviews */}
//                 <div>
//                     {reviews.length > 0 ? (
//                         reviews.map((review, index) => (
//                             <Review
//                                 key={index}
//                                 author={review.author}
//                                 rating={review.rating}
//                                 text={review.text}
//                             />
//                         ))
//                     ) : (
//                         <p>No reviews yet. Be the first to review this book!</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SingleBook;
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Banner, Button, Textarea, Label } from 'flowbite-react';
import { HiX, HiShoppingCart } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import { FaShoppingCart, FaCreditCard, FaStar } from 'react-icons/fa';
import { getAuth } from 'firebase/auth';

const StarRating = ({ rating, onRatingChange }) => {
    const handleRating = (rate) => {
        onRatingChange(rate);
    };

    return (
        <div className='flex'>
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => handleRating(index + 1)}
                />
            ))}
        </div>
    );
};

// Review Component
const Review = ({ author, rating, text, onEdit, onDelete }) => {
    return (
        <div className='border rounded p-4 mb-4 shadow'>
            <h4 className='text-xl font-semibold'>{author}</h4>
            <div className='flex items-center mb-2'>
                <span className='text-yellow-500'>
                    {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </span>
            </div>
            <p>{text}</p>
            <div className='mt-2 flex justify-end space-x-4'>
                <Button size="xs" color="gray" onClick={onEdit}>Edit</Button>
                <Button size="xs" color="red" onClick={onDelete}>Delete</Button>
            </div>
        </div>
    );
};

// Main Book Component
const SingleBook = () => {
    const data = useLoaderData();
    const { _id, bookTitle, authorName, imageURL, category, bookDescription, price } = data;
    const [cartCount, setCartCount] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            setCurrentUser(user.displayName || 'Anonymous');
        }

        const fetchReviews = async () => {
            const response = await fetch(`https://book-server-chi.vercel.app/book/${_id}/reviews`);
            const reviewsData = await response.json();
            setReviews(reviewsData);
        };

        fetchReviews();
    }, [_id]);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert('You need to be logged in to submit a review');
            return;
        }
        if (reviewRating === 0) {
            alert('Please provide a rating');
            return;
        }

        const newReview = {
            author: currentUser,
            text: reviewText,
            rating: reviewRating,
        };

        if (isEditing) {
            const updatedReviews = reviews.map((review, index) =>
                index === editIndex ? newReview : review
            );
            setReviews(updatedReviews);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            const response = await fetch(`https://book-server-chi.vercel.app/book/${_id}/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReview),
            });

            if (response.ok) {
                setReviews([newReview, ...reviews]);
            } else {
                alert('Failed to submit review');
            }
        }

        setReviewText('');
        setReviewRating(0);
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setEditIndex(index);
        setReviewText(reviews[index].text);
        setReviewRating(reviews[index].rating);
    };

    const handleDelete = async (index) => {
        const reviewId = reviews[index]._id; // Assuming each review has a unique ID from the database
        const response = await fetch(`https://book-server-chi.vercel.app/book/${_id}/review/${reviewId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            const updatedReviews = reviews.filter((_, i) => i !== index);
            setReviews(updatedReviews);
        } else {
            alert('Failed to delete review');
        }
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
                        <StarRating rating={reviewRating} onRatingChange={setReviewRating} />
                    </div>
                    <Button type='submit' color="dark">
                        {isEditing ? 'Update Review' : 'Submit Review'}
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
                                onEdit={() => handleEdit(index)}
                                onDelete={() => handleDelete(index)}
                            />
                        ))
                    ) : (
                        <p className='text-lg text-gray-500'>No reviews yet. Be the first to review this book!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
