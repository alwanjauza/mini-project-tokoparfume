import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_PK = gql `
query products($uuid: uuid!) {
    products_by_pk(uuid: $uuid) {
      image
      productName
      productPrice
      ingredients
      desc
      time_stamp
      uuid
    }
  }
`