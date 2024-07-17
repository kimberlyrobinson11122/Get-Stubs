import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      id
      username
      email
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
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`
;