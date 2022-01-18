const cars = [
  {
    name: "Audi e-tron",
    year: 2021,
    color: "Silver",
    topspeed: "190 km/h",
    horsepower: "355",
    range: "357 kilometers",
    url: "./img/audiEtron.jpg",
  },
  {
    name: "Chevrolet Bolt EV",
    year: 2021,
    color: "Blue",
    topspeed: "145 km/h",
    horsepower: "200",
    range: "417 kilometers",
    url: "./img/chevroletBoltEV.jpg",
  },
  {
    name: "Hyundai Ioniq 5",
    year: 2021,
    color: "Silver",
    topspeed: "185 km/h",
    horsepower: "168",
    range: "383 kilometers",
    url: "./img/hyundaiIoniq5.jpg",
  },
  {
    name: "Tesla model Y",
    year: 2021,
    color: "Blue",
    topspeed: "190 km/h",
    horsepower: "N/A",
    range: "217 kilometers",
    url: "./img/teslaY.jpg",
  },
  {
    name: "Volkswagen ID 4",
    year: 2021,
    color: "White",
    topspeed: "160 km/h",
    horsepower: "201",
    range: "402 kilometers",
    url: "./img/vWID4.jpg",
  },
  {
    name: "Ford Mustang Mach-E",
    year: 2021,
    color: "Navy",
    topspeed: "180 km/h",
    horsepower: "266",
    range: "483 kilometers",
    url: "./img/FordMustangMach-E.jpg",
  },
  {
    name: "Hyundai Kona EV",
    year: 2021,
    color: "White",
    topspeed: "167 km/h",
    horsepower: "201",
    range: "415 kilometers",
    url: "./img/konaev.jpg",
  },
  {
    name: "Tesla model 3",
    year: 2021,
    color: "White",
    topspeed: "233 km/h",
    horsepower: "N/A",
    range: "568 kilometers",
    url: "./img/tesla3.jpg",
  },
  {
    name: "Porsche Taycan",
    year: 2021,
    color: "Light blue",
    topspeed: "250 km/h",
    horsepower: "402",
    range: "320 kilometers",
    url: "./img/PorscheTaycan.jpg",
  },
];

const list = document.getElementById("list");

const root = document.getElementById("root");

const carList = [];

const showList = () => {
  list.innerText = "";
  for (let i = 0; i < carList.length; i++) {
    list.innerText += carList[i].name;
  }
};

const renderCar = () => {
  for (i = 0; i < cars.length; i++) {
    let box = document.createElement("div");
    box.className = "box";

    let list = document.createElement("ul");
    box.appendChild(list);

    let name = document.createElement("li");
    name.innerText = cars[i].name;
    box.appendChild(name);

    let year = document.createElement("li");
    year.innerText = cars[i].year;
    box.appendChild(year);

    let color = document.createElement("li");
    color.innerText = cars[i].color;
    box.appendChild(color);

    let topspeed = document.createElement("li");
    topspeed.innerText = cars[i].topspeed;
    box.appendChild(topspeed);

    let horsepower = document.createElement("li");
    horsepower.innerText = cars[i].horsepower;
    box.appendChild(horsepower);

    let range = document.createElement("li");
    range.innerText = cars[i].range;
    box.appendChild(range);

    let img = document.createElement("img");
    img.src = cars[i].url;
    img.className = "img";
    box.appendChild(img);

    let btn = document.createElement("button");
    btn.innerText = "Add to list";
    btn.addEventListener("click", addCar);
    box.appendChild(btn);

    root.appendChild(box);
  }
};

const addCar = (indexToAdd) => {
  const index = carList.indexOf(indexToAdd);
  console.log(index);
  carList.push(indexToAdd);
  showList();
};

renderCar();
