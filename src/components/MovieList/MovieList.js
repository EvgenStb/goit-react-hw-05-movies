import {useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesList,
  MovieItem,
  MoviePoster,
  MovieTitle,
  MovieLink,
} from './MovieList.styled';
import { IMG_BASE_URL } from "API/API";

export const MovieList = ({movies}) => {
    const location = useLocation();
    return (
      <MoviesList>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MoviePoster
                src={IMG_BASE_URL.concat(poster_path)}
                alt={`${title}`}
              />
              <MovieTitle>{title ?? original_name}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MoviesList>
    );

}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    original_name: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  })),
};