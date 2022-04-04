let preloading = false;

// preloader
const showPreloader = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "block";
  preloading = true;
};

const hidePreloader = () => {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  preloading = false;
};

const getData = () => {
  if (!preloading) {
    showPreloader();

    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((response) => response.json())
      .then((data) => {
        let content = document.getElementById("content");
        let hr = document.createElement("hr");
        content.appendChild(hr);

        for (let user of data) {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWebsite = document.createElement("p");

          pId.innerText = `User ID: ${user.id}`;
          pName.innerText = `User ID: ${user.name}`;
          pWebsite.innerHTML = `User ID: ${user.website}<br/>==============`;

          content.appendChild(pId);
          content.appendChild(pName);
          content.appendChild(pWebsite);
        }

        hidePreloader();

        console.log(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }
};

const scrollToEndOfPage = () => {
  let d = document.documentElement;

  // height of elements content, including content not visible on the screen
  let scrollHeight = d.scrollHeight;

  // number of pixels that elements content is scrolled vertically
  let scrollTop = d.scrollTop;

  // inner height of element in pixels
  let clientHeight = d.clientHeight;

  // sum of scrollTop and clientHeight to compare with scrollHeight (needs to be the same for scrollToEndOfPage function)

  // Math.ceil - because some browsers give decimal numbers (e.g. 1221.56856568)
  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  console.log(`scrollHeight: ${scrollHeight}`);
  console.log(`scrollTop: ${scrollTop}`);
  console.log(`clientHeight: ${clientHeight}`);
  console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
  console.log(`======================================`);

  if (sumScrollTopClientHeight >= scrollHeight) {
    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
