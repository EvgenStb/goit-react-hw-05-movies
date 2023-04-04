import  { useEffect, useState, useRef } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { BackBtn, LinkList } from './MovieDeteils.styled';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import { getMovieDatails } from 'API/API';
import { Suspense } from 'react';



const MovieDetails = () => {
    const [movieData, setmovieData] = useState(null);
    const {id} = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        getMovieDatails(id).then(data => setmovieData(data));
    },[id])

    if (!movieData) {
      return null;
    }
    

    return (
      <>
        <BackBtn to={backLink.current}> Go back </BackBtn>
        <MovieDetail movie={movieData} />
        <div>
          <h4>Aditional information</h4>
          <LinkList>
            <li>
              <Link to="credits">Credits</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </LinkList>
        </div>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </>
    );
}

export default MovieDetails
