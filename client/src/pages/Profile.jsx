import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

const Profile = () => {
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>welcome to your profile!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here are your stubs:</h2>
        <h3>example 1</h3>
        <h3>example 2</h3>
    
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Profile;
