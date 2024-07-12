import { useLocation } from 'react-router-dom';

function NotFound() {
  let location = useLocation();
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>
          No match for <code>{location.pathname}</code>
        </h1>
        <h2>Trying to go to "Home"?</h2>
        <h3>There is currently a bug where the "home" navigation button does not take you home.</h3>
        <h3>"Home" exists at "/", but the navbar tries to take you to "/home".</h3>
        <h3>We are working on resolving this bug.</h3>
      </div>
    </div>
  );
}

export default NotFound;
