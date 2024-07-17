import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import styles from "./Home.module.css";
import {GET_EVENTS, QUERY_ME} from "../utils/queries";
import { SAVE_EVENT } from '../utils/mutations';

// need seeds.js file 

const Home = () => {
  const {data, loading, error} = useQuery(GET_EVENTS)
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Get Stubs!</h1>
        <h2>Upcoming Events</h2>
        {/*<h2>This page will have all of our events and will be the default landing page for the app.</h2>*/}
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        {data.events.map(event => (
          <div key={event._id} className={`event-card ${styles.customCardBody}`}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>Date: {new Date(parseInt(event.date)).toLocaleDateString()}</p>
            <p>Time: {new Date(parseInt(event.date)).toLocaleTimeString()}</p>
            <p>Location: {event.location}</p>
            <Link to={`/event/${event._id}`}>Go to Event</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;