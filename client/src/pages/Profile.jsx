import React from 'react';
import { useQuery } from '@apollo/client';
//import { GET_SAVED_EVENTS } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = ({ userId }) => {
  // const { data, loading, error } = useQuery(GET_SAVED_EVENTS, {
  //   variables: { userId },
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  console.log(Auth.getProfile());

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to your profile!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here are your saved events:</h2>
        {/* {data.user.savedEvents.map(event => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(parseInt(event.date)).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Saved By: {event.savedBy}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};



export default Profile;