import { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews]= useState(null)
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    }, [])
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-semibold text-center">What People Say</h2>
            <div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    reviews?.map(review=><Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;