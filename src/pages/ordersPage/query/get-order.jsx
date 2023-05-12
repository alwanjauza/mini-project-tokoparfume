import { gql } from "@apollo/client";

// Read data
export const GET_ORDERS = gql`
  query orders {
    orders(order_by: { orderTime: asc }) {
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