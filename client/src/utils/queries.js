import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query users {
    users {
      _id
      username
      email
      savedEvents
    }
  }
`;

export const GET_USER = gql`
query Query($userId: ID!) {
  user(userId: $userId) {
    _id
    savedEvents
    email
    eventCount
    username
  }
}
`;

export const GET_EVENTS = gql`
  query Events {
    events {
      date
      description
      location
      title
      _id
    }
  }`;

  export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedEvents
    }
  }
`;

export const GET_EVENT = gql`
query Query($eventId: ID!) {
  event(eventId: $eventId) {
    _id
    date
      description
      location
      title
  }
}`;