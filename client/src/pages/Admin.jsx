import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Admin = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>
      </div>
      <div className="card-body m-5">
        <h2>This is the Admin Page. You should only be able to view this page if you have the admin role.</h2>
        <h2>The admin role should also make this page viewable from the navbar, but not before.</h2>
      </div>
    </div>
  );
};

export default Admin;
