import { gql } from "@apollo/client";

// Create data
export const ADD_ORDERS = gql`
  mutation orders($object: orders_insert_input!) {
    insert_orders_one(object: $object) {
      uuid
    }
  }
`;

// Read data
export const GET_ORDERS = gql`
  query orders {
    products(order_by: { orderTime: asc }) {
      uuid
      firstName
      lastName
      address
      postalCode
      phone
      orderTime
    }
  }
`;