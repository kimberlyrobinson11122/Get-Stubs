import React from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import styles from "./Home.module.css";
import {GET_EVENTS, QUERY_ME} from "../utils/queries";
import { SAVE_EVENT } from '../utils/mutations';

import Auth from '../utils/auth';

const Home = () => {
  const {data, loading, error} = useQuery(GET_EVENTS);

  const [savedEventIds, setSavedEventIds] = useState([]);

  //getting the logged in user information
  const me = useQuery(QUERY_ME);
  const userData = me?.data;

  //getting the saved events for the current user
  const mySavedEvents = (userData?.me.savedEvents || []);
  const mySavedEventIds = mySavedEvents.map(event => event._id);

  const [saveEvent] = useMutation(SAVE_EVENT);

  // create function to handle saving a book to our database
  const handleSaveEvent = async (eventId) => {

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const response = await saveEvent({
        variables: { eventId }
      });

      // if event successfully saves to user's account, save event id to state
      setSavedEventIds([...savedEventIds, eventId]);
    } catch (err) {
      console.error(err);
    }
  };

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
            <p>{event.description}</p>
            <p>Date: {new Date(parseInt(event.date)).toLocaleDateString()}</p>
            <p>Time: {new Date(parseInt(event.date)).toLocaleTimeString()}</p>
            <p>Location: {event.location}</p>
            {Auth.loggedIn() && (
              <Button
                disabled={savedEventIds?.some((savedEventId) => savedEventId === event._id)}
                className='btn-block btn-info'
                onClick={() => handleSaveEvent(event._id)}>
                {savedEventIds?.some((savedEventId) => savedEventId === event._id)
                  ? 'This event has been saved!'
                  : 'Save this Event!'}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;