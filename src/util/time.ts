export const toHourAndMinute = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
};

export const toHour = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  return `${hours}h`;
};

export const getYearFromReleaseDate = (releaseDate: string | undefined) => {
  if (!releaseDate) return null;
  const date = new Date(releaseDate);
  return date.getFullYear();
};

export const getVoteAverage = (voteAverage: string) => {
  if (voteAverage === null || voteAverage === undefined) return null;
  return Number(voteAverage).toFixed(1);
};
