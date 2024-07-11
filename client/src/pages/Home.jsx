import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>
      </div>
    </div>
  );
};

export default Home;
