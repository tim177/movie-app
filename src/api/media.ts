import fetchDataFromApi from ".";

export const fetchTopRatedMedia = async (mediaType: "movie" | "tv") => {
  return fetchDataFromApi(`/${mediaType}/top_rated`);
};

export const fetchPopularMedia = async (mediaType: "movie" | "tv") => {
  return fetchDataFromApi(`/${mediaType}/popular`);
};

export const fetchTrendingMedia = async (
  timeframe: "day" | "week"
): Promise<MediaList> => {
  return (await fetchDataFromApi(`/trending/all/${timeframe}`)) as MediaList; // ✅ Explicitly cast to MediaList
};
