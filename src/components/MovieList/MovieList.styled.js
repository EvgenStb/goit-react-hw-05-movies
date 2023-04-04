import styled from "styled-components";
import { Link } from 'react-router-dom';

const MoviesList = styled.ul`
display:flex;
width: 100%;
margin-top:10px;
padding: 0;
flex-wrap: wrap;
gap: 10px;
list-style:none;
`
const MovieItem = styled.li`
display:block;
border: 1px solid grey;
border-radius:3%;
width: calc((100% - 50px)/5);
`
const MovieLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  text-decoration: none;
`;
const MoviePoster = styled.img`
width: 100%;
border-radius: 3%;
`
const MovieTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
`;

export { MoviesList, MovieItem, MoviePoster, MovieTitle, MovieLink };