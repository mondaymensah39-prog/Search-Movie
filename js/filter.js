export function filterByType(movies, type) {
  if (type === "all") return movies;
  return movies.filter((movie) => movie.Type === type);
}

export function sortMovies(movies, order) {
  const copy = [...movies];

  if (order === "title-asc") {
    copy.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (order === "year-desc") {
    copy.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  }

  return copy;
}