function getMoviesList() {
  $.getJSON(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=fr-FR&page=1`
  ).done((res) => {
    res.results.forEach((element) => {
      const card = cardBuilder(
        IMAGE_PATH + element.poster_path,
        element.vote_average,
        element.vote_count,
        element.release_date,
        element.overview
      );

      $("#movies-list").append(card);
    });
  });
}
function getMoviesSearch(query, page = 1) {
  $("#movies-searched").html("");
  //$("#pages").html("");
  const liste = $("<ul>");
  $.getJSON(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}&page=${page}&include_adult=false`
  ).done((res) => {
    if (res.page < res.total_pages) {
      $("#next").data("page", res.page + 1);
    }
    if (res.page > 1) {
      $("#previous").data("page", res.page - 1);
    }

    res.results.forEach((element) => {
      const newMovie = $("<a>")
        .attr("href", "#")
        .data("name", element.title)
        .text(element.title);

      const newLi = $("<li>");
      newLi.append(newMovie);
      liste.append(newLi);
    });
  });
  $("#movies-searched").append(liste);
}

function getMovieByName(name) {
  $("#movie-details").html("");
  $.getJSON(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${name}&include_adult=false`
  ).done((res) => {
    const firstElement = res.results[0];
    const card = cardBuilder(
      IMAGE_PATH + firstElement.poster_path,
      firstElement.vote_average,
      firstElement.vote_count,
      firstElement.release_date,
      firstElement.overview
    );
    $("#movie-details").append(card);
  });
}
