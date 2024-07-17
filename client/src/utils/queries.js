import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query users {
    users {
      _id
      username
      email
      savedEvents {
        title
        description
        date
        location
        savedBy
      }
    }
  }
`;

export const GET_USER = gql`
query Query($userId: ID!) {
  user(userId: $userId) {
    _id
    savedEvents {
      title
      description
      location
      date
      _id
    }
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
  }
`;

export const GET_SAVED_EVENTS = gql`
  query SavedEvents($userId: ID!) {
    user(userId: $userId) {
      _id
      savedEvents {
        title
        description
        date
        location
        savedBy
      }
    }
  }
`;