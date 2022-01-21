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
    let listContainer = document.createElement("div");
    listContainer.className = "liContainer";

    let listItem = document.createElement("li");
    listContainer.appendChild(listItem);
    listItem.innerText += carList[i].name;

    let listBtn = document.createElement("button");
    listContainer.appendChild(listBtn);
    listBtn.innerText = "Remove";
    listBtn.onclick = () => removeCar(i);

    list.appendChild(listContainer);
  }
};

const showCars = () => {
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    renderCar(car);
  }
};

const renderCar = (car) => {
  let box = document.createElement("div");
  box.className = "box";

  let list = document.createElement("ul");
  list.className = "carSpecs";
  box.appendChild(list);

  let img = document.createElement("img");
  img.src = car.url;
  img.className = "img";
  list.appendChild(img);

  let name = document.createElement("li");
  name.innerText = "Model: " + car.name;
  list.appendChild(name);

  let year = document.createElement("li");
  year.innerText = "Year: " + car.year;
  list.appendChild(year);

  let color = document.createElement("li");
  color.innerText = "Color: " + car.color;
  list.appendChild(color);

  let topspeed = document.createElement("li");
  topspeed.innerText = "Topspeed: " + car.topspeed;
  list.appendChild(topspeed);

  let horsepower = document.createElement("li");
  horsepower.innerText = "Horsepower: " + car.horsepower;
  list.appendChild(horsepower);

  let range = document.createElement("li");
  range.innerText = "Range: " + car.range;
  list.appendChild(range);

  let btn = document.createElement("button");
  btn.innerText = "Add to list";
  btn.className = "addBtn";
  btn.onclick = () => addCar(car);
  box.appendChild(btn);

  root.appendChild(box);
};

const addCar = (indexToAdd) => {
  carList.push(indexToAdd);
  showList();
};

const removeCar = (indexToRemove) => {
  carList.splice(indexToRemove, 1);
  showList();
};

showCars();
