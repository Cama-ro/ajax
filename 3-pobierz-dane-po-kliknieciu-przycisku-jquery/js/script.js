$(document).ready(function () {
  $("#btn-get-data").click(function () {
    // option 1 - jquery with $.get()
    // $.get("https://akademia108.pl/api/ajax/get-post.php")
    //   .done(function (data) {
    //     // 1a. create elements in jquery by $('<selector></selector>')
    //     // 1b. add text inner created elements by .text()

    //     let pId = $("<p></p>").text(`Post ID: ${data.id}`);
    //     let pUserId = $("<p></p>").text(`User ID: ${data.userId}`);
    //     let pTitle = $("<p></p>").text(`Title ID: ${data.title}`);
    //     let pBody = $("<p></p>").text(`Body ID: ${data.body}`);
    //     let hr = $("<hr/>");

    //     // add elements to html by append, inner div id="content"
    //     $("#content").append(pId);
    //     $("#content").append(pUserId);
    //     $("#content").append(pTitle);
    //     $("#content").append(pBody);
    //     $("#content").append(hr);
    //   })
    //   .fail(function (error) {
    //     console.error(error);
    //   });

    // option 2 - jquery with $.getJSON()
    $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        // 1a. create elements in jquery by $('<selector></selector>')
        // 1b. add text inner created elements by .text()

        let pId = $("<p></p>").text(`Post ID: ${data.id}`);
        let pUserId = $("<p></p>").text(`User ID: ${data.userId}`);
        let pTitle = $("<p></p>").text(`Title ID: ${data.title}`);
        let pBody = $("<p></p>").text(`Body ID: ${data.body}`);
        let hr = $("<hr/>");

        // add elements to html by append, inner div id="content"
        $("#content").append(pId);
        $("#content").append(pUserId);
        $("#content").append(pTitle);
        $("#content").append(pBody);
        $("#content").append(hr);
      })
      .fail(function (error) {
        console.error(error);
      });
  });
});
