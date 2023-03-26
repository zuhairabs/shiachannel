const renderTafseer = (id) => {
  if (id == 1) {
    $("#tafseerContent").load("tafseers/Surah1.html");
  } else if (id == 2) {
    $("#tafseerContent").load("tafseers/Surah2.html");
  } else if (id == 3) {
    $("#tafseerContent").load("tafseers/Surah3.html");
  } else if (id == 4) {
    $("#tafseerContent").load("tafseers/Surah4.html");
  } else if (id == 5) {
    $("#tafseerContent").load("tafseers/Surah5.html");
  } else if (id == 6) {
    $("#tafseerContent").load("tafseers/Surah6.html");
  } else if (id == 7) {
    $("#tafseerContent").load("tafseers/Surah7.html");
  } else if (id == 8) {
    $("#tafseerContent").load("tafseers/Surah8.html");
  } else if (id == 9) {
    $("#tafseerContent").load("tafseers/Surah9.html");
  } else if (id == 10) {
    $("#tafseerContent").load("tafseers/Surah10.html");
  } else if (id == 11) {
    $("#tafseerContent").load("tafseers/Surah11.html");
  } else if (id == 12) {
    $("#tafseerContent").load("tafseers/Surah12.html");
  } else if (id == 13) {
    $("#tafseerContent").load("tafseers/Surah13.html");
  } else if (id == 14) {
    $("#tafseerContent").load("tafseers/Surah14.html");
  } else if (id == 15) {
    $("#tafseerContent").load("tafseers/Surah15.html");
  } else {
    $("#tafseerContent").text("Please Select a Tafseer");
  }
};

//get Id
let searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("id")) {
  let ids = searchParams.get("id");
  renderTafseer(ids);
  //console.log(id);
} else {
  $("#tafseerContent").text("Please Select a Tafseer");
}
