import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>

        <h2> This page will have all of our events and will be the default landing page for the app.</h2>
      </div>
    </div>
  );
};

export default Home;
