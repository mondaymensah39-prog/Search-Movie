export function createMovieCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";

  card.innerHTML = `
    <div class="poster"></div>
    <h3>${movie.Title}</h3>
    <p>${movie.Year} · ${movie.Type}</p>
  `;

  const posterBox = card.querySelector(".poster");

  function showPlaceholder() {
    posterBox.innerHTML = "";
    posterBox.textContent = "No poster";
    posterBox.classList.add("no-poster");
  }

  if (movie.Poster === "N/A") {
    showPlaceholder();
    return card;
  }

  const img = document.createElement("img");
  img.src = movie.Poster;
  img.alt = `Poster of ${movie.Title}`;
  img.addEventListener("error", showPlaceholder);

  posterBox.appendChild(img);
  return card;
}

export function renderMovies(movies, container) {
  container.innerHTML = "";
  movies.forEach((movie) => {
    container.appendChild(createMovieCard(movie));
  });
}

export function showStatus(element, text, isError = false) {
  element.textContent = text;
  element.classList.toggle("error", isError);
}
document.getElementById("year").textContent = new Date().getFullYear();