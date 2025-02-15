export interface MediaItem {
  adult: boolean;
  backdrop_path: string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  origin_country?: string[];
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  media_type?: string;
  release_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MediaList {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MediaItem[];
  total_pages: number;
  total_results: number;
}
