import { IMG_BASE_URL } from "API/API";
import { Container, SubTitle, Text, Poster } from './MoveDetails.styled';

export const MovieDetail = ({movie}) => {
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;
  const imgPath = IMG_BASE_URL.concat(poster_path);
  const genresList = genres.map(item => item.name).join(", ")
  const dateRelise = release_date.slice(0, 4);
  const userScore = vote_average.toFixed(1);

  return (
    <Container>
      <Poster src={imgPath} alt={title} />
      <div>
        <h2>{original_title}</h2>
        <SubTitle>
          Release date:<Text>{dateRelise}</Text>
        </SubTitle>
        <SubTitle>
          User Score:<Text>{userScore}</Text>
        </SubTitle>
        <SubTitle>
          Overview:<Text>{overview}</Text>
        </SubTitle>
        <SubTitle>
          Genres:<Text>{genresList}</Text>
        </SubTitle>
      </div>
    </Container>
  );
};


