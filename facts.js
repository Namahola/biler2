const facts = document.getElementById("facts");

fetch("https://javascript.webexam-mcdm.dk/api/texts")
  .then((response) => response.json())
  .then((responseData) => {
    for (let i = 0; i < responseData.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.className = "factBox";

      let heading = document.createElement("h3");
      heading.innerHTML = responseData[i].name;
      heading.className = "factHeading";
      newDiv.appendChild(heading);

      let text = document.createElement("p");
      text.innerHTML = responseData[i].description;
      text.className = "fact";
      newDiv.appendChild(text);

      facts.appendChild(newDiv);
    }
  });
