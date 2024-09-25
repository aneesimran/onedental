import { useEffect, useState } from "react";
import { fetchGoogleReviews, Review } from "../lib/googleReviews";

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <>
            {"★".repeat(fullStars)}
            {"☆".repeat(emptyStars)}
        </>
    );
};

const GoogleReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getReviews = async () => {
            const fetchedReviews = await fetchGoogleReviews();
            const filteredReviews = fetchedReviews.filter(
                (review) => review.rating >= 4
            );
            setReviews(filteredReviews);
            setLoading(false);
        };

        getReviews();
    }, []);

    if (loading) {
        return <div>Loading reviews...</div>;
    }

    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center ml-auto mr-auto p-10 md:gap-10 ">
                {reviews.length === 0 && <p>No reviews found.</p>}
                {reviews.slice(0, 4).map((review, index) => (
                    <>
                        <div className="card shadow-xl items-center bg-theme-light border-4 border-solid border-theme-med xl:w-2/12">
                            <div className="card-body">
                                <div key={index} className="review">
                                    <h2 className="card-title">
                                        {review.author_name}
                                    </h2>
                                    <h2 className="card-title text-yellow-600 pt-1 pb-1">
                                        {renderStars(review.rating)}
                                    </h2>
                                    <p>{review.text}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default GoogleReviews;
