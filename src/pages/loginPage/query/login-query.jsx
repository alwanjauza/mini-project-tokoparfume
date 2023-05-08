import { gql } from "@apollo/client";

export const GET_PROFILE = gql `
query MyQuery {
    profile {
        username
        password
        isAdmin
    }
}`