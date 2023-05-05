import { gql } from '@apollo/client';

// Read data
export const GET_PRODUCT = gql`
  query products {
    products(order_by: { time_stamp: asc }) {
      uuid
      image
      productName
      productPrice
      ingredients
      desc
    }
  }
`;

// Create data
export const ADD_PRODUCT = gql`
  mutation products($object: products_insert_input!) {
    insert_products_one(object: $object) {
      uuid
    }
  }
`;

// Update data
export const UPDATE_PRODUCT = gql`
  mutation product(
    $pk_columns: products_pk_columns_input!
    $_set: products_set_input!
  ) {
    update_products_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// Delete data
export const DELETE_PRODUCT = gql`
  mutation products($uuid: uuid!) {
    delete_products_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
