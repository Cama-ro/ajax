$(document).ready(function () {
  $(".button").click(function () {
    $.getJSON(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
      function (data) {
        console.log(data);
        // 1a. create p elements in jquery by $('<selector></selector>')
        // 1b. add text inner created elements by .text()
        let pName = $("<p></p>").text(data.imie);
        let pSurname = $("<p></p>").text(data.nazwisko);
        let pJob = $("<p></p>").text(data.zawod);
        let pCompany = $("<p></p>").text(data.firma);

        // add elements to html by append, inner div id="dane-programisty"
        $("#dane-programisty").append(pName);
        $("#dane-programisty").append(pSurname);
        $("#dane-programisty").append(pJob);
        $("#dane-programisty").append(pCompany);
      }
    ).fail(function (error) {
      console.error(error);
    });
  });
});
