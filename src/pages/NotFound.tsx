import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1> OOPS, Path Not Found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
