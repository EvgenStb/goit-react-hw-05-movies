import { useEffect, useState } from "react";
import { getMovieReviews, } from 'API/API';
import { useParams } from "react-router-dom"
import ReviewCard from "./ReviewsCard";
import NoReviews from "Errors/NoReviews";


 const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id).then(data => setReviews(data.results));
  },[id]);
  
  return (
    <>
    {reviews.length === 0 ? <NoReviews/> :
    <div>{reviews.map(item => ReviewCard(item))}</div>};
    </>
  )
};
 
export default Reviews;
