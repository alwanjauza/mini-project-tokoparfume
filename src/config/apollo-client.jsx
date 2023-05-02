import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://suited-grouper-82.hasura.app/v1/graphql",
  cache: new InMemoryCache({addTypename: false}),
  headers: {
    "x-hasura-admin-secret":
      "4KhBt8VadM8GPOC3ptZfEfCDrLDaJIPvgC21XmYNUXSlyh0SvyLj1R2IfFu76eiC",
  },
});
