import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

export const fetchAniList = async (query: string, variables?: any) => {
  const client = new ApolloClient({
    uri: String(process.env.NEXT_PUBLIC_ANILIST_URL),
    cache: new InMemoryCache(),
  });

  try {
    const clientRes = client.query({
      query: gql`${query}`,
      variables: variables,
    });

    return clientRes;
  } catch (error) {
    return null;
  }
};
