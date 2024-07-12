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
      <div>
      <h2>TBD on what this does. Some suggestions:</h2>
      <li> It could link to Groove Guide</li>
      <li> It could bring you to more details about the artist.</li>
      </div>
    
     </div>
  );
};

export default Groove;
