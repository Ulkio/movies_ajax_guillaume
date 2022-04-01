function changeDateFormat(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("fr");
}

function cardBuilder(
  poster_path,
  vote_average,
  vote_count,
  release_date,
  overview
) {
  const card = $("<div>").addClass("card");
  const cardDetails = $("<div>").addClass("card-details");
  if (poster_path === null) {
    poster_path = "../img/noimg.svg";
  }
  const poster = $("<img>").attr("src", poster_path);
  const note = $("<p>").text(`Note : ${vote_average}/10`);
  const vote = $("<p>").text(`${vote_count} personnes ont voté.`);
  const date = $("<p>").text(
    `Date de sortie : ${changeDateFormat(release_date)}`
  );
  const description = $("<p>").text(overview).addClass("description");

  cardDetails.append(note, vote, date, description);
  card.append(poster);
  card.append(cardDetails);

  return card;
}
