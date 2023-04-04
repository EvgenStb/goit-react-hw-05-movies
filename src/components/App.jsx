import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';


// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from './Cast/Cast';
// import Reviews  from './Reviews/Reviews';
// import Movies from "pages/Movies/Movies";

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(()=> import('./Reviews/Reviews'))
const PageNotFound = lazy(()=> import('../Errors/PageNotFound'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
