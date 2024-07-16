import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {
  // using useQuery hook
  const { loading, error, data } = useQuery(GET_EVENTS_QUERY); // need graphQL where Get_Events_Query)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>
        <h2>This page will have all of our events and will be the default landing page for the app.</h2>
      </div>
      <div className="card-body">
        <h3>Upcoming Events:</h3>
        {data.events.map(event => (
          <div key={event.id} className="event-card">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <Link to={`/event/${event.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;