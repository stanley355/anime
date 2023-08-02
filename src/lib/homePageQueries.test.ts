import { describe, expect, test } from "@jest/globals";
import { fetchAniList } from "./fetchAniList";
import { HOME_PAGE_QUERIES } from "./graphqlQueries";

describe("Test HomePageQueries", () => {
  test("Homepage should have at least 10 Animes", async () => {
    const homePageAnimes = await fetchAniList(HOME_PAGE_QUERIES, {
      variables: { page: 1 },
    });
    expect(homePageAnimes?.data.Page.media.length).toBe(10);
  });

  test("Homepage Query should have 'media' key", async () => {
    const homePageAnimes = await fetchAniList(HOME_PAGE_QUERIES, {
      variables: { page: 1 },
    });
    expect(homePageAnimes?.data.Page.media).toBeDefined();
  });

  test("Homepage Anime should have 'important' keys", async () => {
    const homePageAnimes = await fetchAniList(HOME_PAGE_QUERIES, { page: 1 });
    expect(homePageAnimes?.data.Page.media[0].id).toBeDefined();
    expect(homePageAnimes?.data.Page.media[1].averageScore).toBeDefined();
    expect(
      homePageAnimes?.data.Page.media[2].title.userPreferred
    ).toBeDefined();
  });
});
