```javascript
#!/usr/bin/node

document.addEventListener('DOMContentLoaded', async () => {
  const movieList = document.querySelector('#list_movies');

  try {
    const response = await fetch(
      'https://swapi-api.alx-tools.com/api/films/?format=json'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();

    data.results.forEach((movie) => {
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      movieList.appendChild(listItem);
    });
  } catch (error) {
    movieList.textContent = 'Unable to load movies.';
  }
});
```