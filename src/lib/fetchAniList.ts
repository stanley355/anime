import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const aniListClient = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export const fetchAniList = async (query: string, variables?: any) => {
  try {
    const clientRes = aniListClient.query({
      query: gql`${query}`,
      variables: variables,
    });

    return clientRes;
  } catch (error) {
    return null;
  }
};
