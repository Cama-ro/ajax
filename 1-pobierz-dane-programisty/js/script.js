$(document).ready(function () {
  $(".button").click(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/users/1", function (data) {
      console.log(data);
      $("#dane-programisty").text(JSON.stringify(data));
    });
  });
});
