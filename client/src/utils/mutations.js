import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}`

;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String!, $date: String!, $location: String!) {
    addEvent(title: $title, description: $description, date: $date, location: $location) {
      id
      title
      description
      date
      location
    }
  }`;

  export const SAVE_EVENT = gql`
  mutation saveEvent($eventId: ID!, $userId: ID!, $title: String!, $description: String, $date: String, $location: String!) {
    saveEvent(eventId: $eventId, userId: $userId, title: $title, description: $description, date: $date, location: $location) {
      _id
        username
        email
        savedEvents {
          id
          title
          description
          date
          location
        }
    }
  }
`;