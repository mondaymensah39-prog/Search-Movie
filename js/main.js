import { searchMovies } from "./api.js";
import { renderMovies, showStatus } from "./render.js";
import { filterByType, sortMovies } from "./filter.js";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const typeFilter = document.querySelector("#type-filter");
const sortSelect = document.querySelector("#sort-select");
const statusEl = document.querySelector("#status");
const results = document.querySelector("#results");

// The single source of truth: the latest search results from the API.
let allMovies = [];

// Rebuilds the entire screen from allMovies, so it can never go stale.
function updateScreen() {
  const filtered = filterByType(allMovies, typeFilter.value);
  const sorted = sortMovies(filtered, sortSelect.value);
  renderMovies(sorted, results);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const term = input.value.trim();
  if (!term) return;

  showStatus(statusEl, "Loading...");
  results.innerHTML = "";

  try {
    allMovies = await searchMovies(term);
    showStatus(statusEl, `Found ${allMovies.length} results`);
    updateScreen();
  } catch (error) {
    allMovies = [];
    showStatus(statusEl, error.message, true);
  }
});

typeFilter.addEventListener("change", updateScreen);
sortSelect.addEventListener("change", updateScreen);