import { getMovieCasts, IMG_BASE_URL } from 'API/API';
import notFoundImage from './img/notFoundImage.png';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NoCasts from 'Errors/NoCasts';
import { CastList, CastItem, CastImg, NameActor } from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCasts(id).then(data => setCasts(data.cast));
  }, [id]);
  return (
    <>
      {casts.length === 0 ? (
        <NoCasts />
      ) : (
        <CastList>
          {casts.map(cast => (
            <CastItem key={cast.id}>
              <CastImg
                src={
                  cast.profile_path
                    ? `${IMG_BASE_URL}${cast.profile_path}`
                    : notFoundImage
                }
              />
              <NameActor>{cast.original_name}</NameActor>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};
export default Cast;

// {
//   cast.profile_path ? (
//     <CastImg
//       src={profile_path ? `${IMG_BASE_URL}${cast.profile_path}` : notFoundImage}
//       alt={`${cast.original_name}`}
//     />
//   ) : (
//     <CastImg src={notFoundImage} alt={`${cast.original_name}`} />
//   );
// }