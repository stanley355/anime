export const HOME_PAGE_QUERIES = `
  query GetHomeData { 
    Page(page: 1, perPage: 10) {
      media {
        id
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        episodes
        duration
        genres
        title {
          romaji
          english
          native
          userPreferred
        }
        countryOfOrigin
        sort: trending
      }
    }
  }
`;
