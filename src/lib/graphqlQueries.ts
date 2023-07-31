export const HOME_PAGE_QUERIES = `
  query GetHomeData($page: Int) {
    Page(page: $page, perPage: 10) {
      media {
        id
        bannerImage
        episodes
        duration
        genres
        countryOfOrigin
        sort: trending
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
        title {
          native
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
  }
`;
