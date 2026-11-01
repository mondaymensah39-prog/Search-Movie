# Movie Search

A web app that searches movies from the OMDb public API, lets you filter by type and sort the results, and displays each movie as a reusable card.

**Live link:** https://mondaymensah39-prog.github.io/Search-Movie/
**Repository:** https://github.com/mondaymensah39-prog/Search-Movie

## Features
- Search movies by title using the OMDb API
- Filter results by type (movies or series)
- Sort results by title (A–Z) or year (newest first)
- Reusable movie card component
- Loading and error messages
- Placeholder image when a poster is missing

## Tools Used
- HTML, CSS, JavaScript (ES modules)
- OMDb API

## Project Structure
```
Search  Movie/
|-- css/
    |--background.jpg
    `--style.css
`-- js/
    |-- api.js            (fetches data from the API)
    |-- filter.js         (filters and sorts results)
    |-- main.js           (handles ussr events amd connects everything)
    `-- render.js         (draws cards and messages)
|-- index.html
|-- README.md

