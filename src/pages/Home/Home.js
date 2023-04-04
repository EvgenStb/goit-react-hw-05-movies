import { useState, useEffect } from "react"
import { dayTopMovies } from "API/API"
import { MovieList } from "components/MovieList/MovieList"


const Home = () => {
const [movies, setMovies] = useState([])
    useEffect (() => {
        dayTopMovies().then(data => setMovies(data.results));
    },[])
return (
    <MovieList movies={movies}/>
)
}

export default Home