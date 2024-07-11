import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

const Login = () => {
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Please Login to Get Stubs!</h1>
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Login;
