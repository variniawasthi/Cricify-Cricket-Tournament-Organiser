import { Link } from 'react-router-dom';

function NotFound404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
}

export default NotFound404;
