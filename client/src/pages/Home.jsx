import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import styles from "./Home.module.css";

// need seeds.js file 

const Home = () => {
  // using useQuery hook
  // const { loading, error, data } = useQuery(Query {
  //     events {
  //       title,
  //       description,
  //       date,
  //       location,
  //       _id
  //     }
  //   };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // this fake event data
  const data = [
    {
      id: '1',
      title: 'Event 1',
      description: 'This is event 1 description',
      date: '2022-01-01',
      location: 'Event 1 Location'
    },
    {
      id: '2',
      title: 'Event 2',
      description: 'This is event 2 description',
      date: '2022-02-02',
      location: 'Event 2 Location'
    },
    {
      id: '3',
      title: 'Event 3',
      description: 'This is event 3 description',
      date: '2022-03-03',
      location: 'Event 3 Location'
    }
  ];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>
        <h2>This page will have all of our events and will be the default landing page for the app.</h2>
      </div>
      <div className={`card-body`}>
        <h3>Upcoming Events:</h3>
        {data.map(event => (
          <div key={event.id} className={`event-card ${styles.customCardBody}`}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <Link to={`/event/${event.id}`}>Go to Event</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;