import { useLocation } from 'react-router-dom';


const PageNotFound = () => {
  const location = useLocation();

  return (
    <div>
      Page requared from URL <span>{location.pathname}</span> not found:(
    </div>
  );
};
export default PageNotFound;