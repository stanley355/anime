export const checkAnimeAdded = (animeID: number) => {
  const collectionStorage = localStorage.getItem("collections");
  const parsedColStorage = collectionStorage
    ? JSON.parse(String(collectionStorage))
    : [];

  if (parsedColStorage.length > 0) {
    const collection = parsedColStorage.map((col: any) => {
      const animeColStorage = localStorage.getItem(col.id);
      const parsedAnimeCol = animeColStorage
        ? JSON.parse(String(animeColStorage))
        : [];

      const filteredAnimeCol = parsedAnimeCol.filter(
        (ani: any) => ani.id === animeID
      );

      if (filteredAnimeCol.length > 0) {
        return col;
      }
      return ""
    });

    return collection.filter((col:any) => col !== "");
  }

  return [];
};
