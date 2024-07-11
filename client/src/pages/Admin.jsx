import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Admin = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here are the events we currently have listed</h2>
      </div>
    </div>
  );
};

export default Admin;
