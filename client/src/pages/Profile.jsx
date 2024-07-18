import React from 'react';
import { useState, useEffect } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
//import { GET_SAVED_EVENTS } from '../utils/queries';
import { GET_EVENT, QUERY_ME, GET_USER } from '../utils/queries';
import { REMOVE_EVENT } from '../utils/mutations';
import Auth from '../utils/auth';
import styles from "./Home.module.css";
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const Profile = () => {
  
  const me = useQuery(QUERY_ME);
  const userData = me?.data;
  const [savedEvents, setSavedEvents] = useState([]);

  const [getEvent, { loading, error, data }] = useLazyQuery(GET_EVENT);

  const mySavedEventIds = (userData?.me.savedEvents || []);

  useEffect(() => {
    if (!me.loading) {
      setSavedEvents((savedEvents) => []);
      (async () => {
        for (const eventId of mySavedEventIds) {
            const result = await getEvent({variables: {eventId} });
            setSavedEvents((savedEvents) => [...savedEvents, {key: result.data.event}]);
        }
      })();
    }
  }, [mySavedEventIds]);

  const [removeEvent] = useMutation(REMOVE_EVENT);

  const handleDeleteEvent = async (eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeEvent({
        variables: {eventId}
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to your profile!</h1>
        {savedEvents.length == 0 && 
          <h2>You have not saved any events yet.</h2>
        }
        {savedEvents.length > 0 &&
          <h2>Here are your saved events</h2>
        }
        
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        {savedEvents.map(event => (
          <div key={event.key._id} className={`event-card ${styles.customCardBody}`}>
            <h3>{event.key.title}</h3>
            <p>{event.key.description}</p>
            <p>Date: {new Date(parseInt(event.key.date)).toLocaleDateString()}</p>
            <p>Location: {event.key.location}</p>
            <Button className='btn-block btn-danger' onClick={() => handleDeleteEvent(event.key._id)}>
                Delete this Event!
              </Button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Profile;