import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const aniListClient = new ApolloClient({
  uri: String(process.env.NEXT_PUBLIC_ANILIST_URL),
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
