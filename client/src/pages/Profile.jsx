import React from 'react';
import { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
//import { GET_SAVED_EVENTS } from '../utils/queries';
import { GET_EVENT, QUERY_ME, GET_USER } from '../utils/queries';
import Auth from '../utils/auth';
import styles from "./Home.module.css";

const Profile = () => {
  
  const me = useQuery(QUERY_ME);
  const userData = me?.data;
  //console.log(userData);
  const [savedEvents, setSavedEvents] = useState([]);
  //console.log(savedEvents);

  const [getEvent, { loading, error, data }] = useLazyQuery(GET_EVENT);

  const mySavedEventIds = (userData?.me.savedEvents || []);
  //console.log(mySavedEventIds);

  useEffect(() => {
    if (mySavedEventIds.length > 0) {
      (async () => {
        for (const eventId of mySavedEventIds) {
          console.log("Event ID: " + eventId);
          const result = await getEvent({variables: {eventId} });
          //console.log(result.data.event);
          setSavedEvents((savedEvents) => [...savedEvents, {key: result.data.event}]);
        }
      })();
    }
  }, [mySavedEventIds]);
  
  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to your profile!</h1>
        <h2>Here are your saved events</h2>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        {savedEvents.map(event => (
          <div key={event.key._id} className={`event-card ${styles.customCardBody}`}>
            <h3>{event.key.title}</h3>
            <p>{event.key.description}</p>
            <p>Date: {new Date(parseInt(event.key.date)).toLocaleDateString()}</p>
            <p>Location: {event.key.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Profile;