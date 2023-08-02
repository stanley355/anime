import { describe, expect, test } from "@jest/globals";
import { fetchAniList } from "./fetchAniList";
import { HOME_PAGE_QUERIES } from "./graphqlQueries";

describe("Test HomePageQueries", () => {
  test("adds 1 + 2 to equal 3", async () => {
    const homePageAnimes = await fetchAniList(HOME_PAGE_QUERIES, {
      variables: { page: 1 },
    });
    expect(homePageAnimes).toBe(3);
  });
});
