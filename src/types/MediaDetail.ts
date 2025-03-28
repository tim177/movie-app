export interface Genre {
  id: number;
  name: string;
}

export interface MediaDetail {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  budget: number;
  genres: Genre[];
  homepage: string;
  name?: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SortOption {
  value: string;
  label: string;
}
