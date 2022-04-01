const API_KEY = "21666c9e5876a785510d7add27c7ba4f";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

/** EXECUTION **/
$(function () {
  $("#weekly-movies").on("click", onClickWeeklyMovies);
  $("#search-movies").on("click", onClickSearchMovies);
  $("#search-button").on("click", onClickSearch);
  $("#movies-searched").on("click", "a", onClickMovie);
  
  $("#pages").on("click", "#previous", function (e) {
    e.preventDefault();
    onClickPreviousPage($(this).data().page);
  });
  $("#pages").on("click", "#next", function (e) {
    e.preventDefault();
    onClickNextPage($(this).data().page);
  });
});
