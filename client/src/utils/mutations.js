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
  }`
;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      eventCount
      email
      _id
    }
  }
}
`
;

// export const ADD_PROFILE = gql`
//   mutation addProfile($name: String!, $email: String!, $password: String!) {
//     addProfile(name: $name, email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

  export const SAVE_EVENT = gql`
  mutation saveEvent($eventId: ID!) {
    saveEvent(eventId: $eventId) {
      _id
        username
        email
        savedEvents
    }
  }
`;