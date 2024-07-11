import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';

const Groove = () => {
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Get Ready to Groove!</h1>
      </div>
      <h2>Here we'll have our groove's/events.</h2>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Groove;
