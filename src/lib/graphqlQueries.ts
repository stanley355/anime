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
        averageScore
        sort: trending
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

export const ANIME_PAGE_QUERIES = `
  query GetAnimePageData($id: Int) {
    Media(id: $id) {
      id
      episodes
      duration
      genres
      countryOfOrigin
      description
      averageScore
      title {
        native
        userPreferred
      }
      coverImage {
        extraLarge
        large
      }
    }
  }
`;
