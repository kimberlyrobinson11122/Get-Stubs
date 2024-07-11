import { gql } from "@apollo/client";

// get all users
export const GET_USERS = gql`
 query users {
    users{
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
 }`;

// single user by id
 export const GET_USER = gql`
 query user($userId: ID!) {
    user(userId: $userId) {
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
 }`;

 export const GET_EVENTS = gql`
 query events {
    events {
        _id
        title
        description
        date
        location
        savedBy {
            _id
            username
            email
        }
    }
 }`;