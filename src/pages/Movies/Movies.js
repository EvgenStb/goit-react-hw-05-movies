import {SearchForm} from "components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { searchMovies} from 'API/API';
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
      const query = searchParams.get('query') ?? '';
      if (!query) {
        return;
      }
      searchMovies(query).then(data => setMovies(data.results));
    }, [searchParams]);
    

    const handleChange = e => {
    const request = e.target.value.trim()
      setQuery(request);
    };

    const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

    return (
      <>
        <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
        <MovieList movies={movies} />
      </>
    );
}
 
export default Movies;