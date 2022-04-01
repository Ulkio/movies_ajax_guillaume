function onClickWeeklyMovies() {
    $("#list-container div").empty();

  getMoviesList();

  $("#list-container").show();
  $("#search-container").hide();
}

function onClickSearchMovies() {
  $("#list-container").hide();
  $("#search-container").show();

  $("#search-value").val("");

  $("#movies-searched").html("");
  $("#movie-details").html("");
}

function onClickSearch() {
  $("#pages-container").show();
  const input = $("#search-value").val();
  getMoviesSearch(input);
}

function onClickPreviousPage(previousPage) {
  const input = $("#search-value").val();
  getMoviesSearch(input, previousPage);
}

function onClickNextPage(nextPage) {
  const input = $("#search-value").val();
  getMoviesSearch(input, nextPage);
}

function onClickMovie() {
  const clickedMovie = this.text;
  getMovieByName(clickedMovie);
}
