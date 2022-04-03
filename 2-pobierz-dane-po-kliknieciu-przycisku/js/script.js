// only js with fetch api

let btnGetData = document.getElementById("btn-get-data");
let content = document.getElementById("content");

const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-post.php", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // create elements
      let pId = document.createElement("p");
      let pUserId = document.createElement("p");
      let pTitle = document.createElement("p");
      let pBody = document.createElement("p");
      let hr = document.createElement("hr");

      // add text inner created elements
      pId.innerText = `Post ID: ${data.id}`;
      pUserId.innerText = `User ID: ${data.userId}`;
      pTitle.innerText = `Title: ${data.title}`;
      pBody.innerText = `Body: ${data.body}`;

      // add elements to html
      content.appendChild(pId);
      content.appendChild(pUserId);
      content.appendChild(pTitle);
      content.appendChild(pBody);
      content.appendChild(hr);
    });
};

// events by click
btnGetData.addEventListener("click", getData);
