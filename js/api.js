const API_KEY = "a671aa7f";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(term) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(term)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network problem. Please try again.");
  }

  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error || "No results found.");
  }

  return data.Search;
}