import { gql } from "@apollo/client";

export const ADD_PROFILE = gql `
mutation MyMutation($object: profile_insert_input = {}) {
    insert_profile_one(object: $object) {
      uuid
      username
    }
  }`