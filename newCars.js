const newCars = document.getElementById("newCars");

fetch("https://javascript.webexam-mcdm.dk/api/images")
  .then((response) => response.json())
  .then((responseData) => {
    for (let i = 0; i < responseData.length; i++) {
      let newCarContainer = document.createElement("div");
      newCarContainer.className = "box";
      newCars.appendChild(newCarContainer);

      let img = document.createElement("img");
      img.src = responseData[i].url;
      img.className = "img";
      newCarContainer.appendChild(img);

      let heading = document.createElement("h3");
      heading.innerHTML = responseData[i].name;
      heading.className = "name";
      newCarContainer.appendChild(heading);
    }
  });
