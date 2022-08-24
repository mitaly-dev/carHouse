let websiteCars = [
  {
    name: "Car",
    img: "./images/car1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 5,
    capacity: 6,
  },
  {
    name: "Bike",
    img: "./images/car3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 3,
    capacity: 2,
  },
  {
    name: "Bus",
    img: "./images/banner3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 12,
    capacity: 15,
  },
  {
    name: "Bus",
    img: "./images/car2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 15,
    capacity: 30,
  },
  {
    name: "Car",
    img: "./images/banner2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 15,
    capacity: 9,
  },
  {
    name: "Bike",
    img: "./images/bike2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
    fare: 5,
    capacity: 3,
  },
];

// all car object end

function displayCar(carObject) {
  let stringifyd = JSON.stringify(carObject);
  let allCars = document.getElementById("all-cars");
  let div = document.createElement("div");
  div.innerHTML = `
        <div class="card mb-3 m-auto" style="max-width: 780px;">
            <div class="row g-0 align-items-center  px-2">
              <div class="col-md-3 ">
                <img src=${carObject.img} class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-9 px-3">
                <div class="card-body">
                  <h5 class="card-title">Transport Mood : ${carObject.name}</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?</p>
                  <div class="d-flex ">
                    <p class="card-text me-4"><small class="text-muted">Fare per kilo : ${carObject.fare}</small></p>
                    <p class="card-text"><small class="text-muted">Capacity : ${carObject.capacity}</small></p>
                </div>
                <button type="button" onclick='bookNow(${stringifyd})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Book Now
                </button>
                </div>
              </div>
            </div>
          </div>
  `;
  allCars.appendChild(div);
}
//call displayCar function
for (let cars of websiteCars) {
  displayCar(cars);
}

//book now click handler
function bookNow(carObject) {
  let modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `<div class="card" style="width: 100%">
  <img src="${carObject.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${carObject.name}</h5>
    <div class="d-flex ">
                    <p class="card-text me-4"><small class="text-muted">Fare per kilo : ${
                      carObject.fare
                    }</small></p>
                    <p class="card-text"><small class="text-muted">Capacity : ${
                      carObject.capacity
                    }</small></p>
    </div>
    <p class="card-text me-4">Fare : <small id="fare" class="text-muted"></small></p>
    <p class="card-text me-4">Tax : <small id="tax" class="text-muted"></small></p>
    <p class="card-text me-4">Total Cost : <small id="total-cost" class="text-muted"></small></p>
    <div>
        <input
          type="number"
          name=""
          id="distance"
          placeholder="Distance to travel"
        />
        <input
          type="number"
          name=""
          id="quantity"
          placeholder="How many vehicle"
        />
        <button id="submit" onclick='totalCost(${JSON.stringify(
          carObject
        )})'>Submit</button>
      </div>

  </div>
</div>`;
}

//total cost by clicking submit button
function getInputValue(id) {
  let elements = document.getElementById(id);
  let values = elements.value;
  elements.value = "";
  return values;
}
function setInnerDetails(id, total) {
  let elements = document.getElementById(id);
  elements.innerText = total;
}

//submit validation
function validation() {
  if (isNaN(distance) === true || isNaN(quantity) == true) {
    return alert("Please fill in the input box");
  }
}

function totalCost(carObject) {
  document.getElementById("submit").addEventListener("click", function () {
    let distanceValue = getInputValue("distance");
    let quantityValue = getInputValue("quantity");

    let perFare = carObject.fare;
    let totalFare = distanceValue * quantityValue * perFare;

    setInnerDetails("fare", totalFare);
    setInnerDetails("tax", quantityValue);

    let totalCost = parseFloat(totalFare) + parseFloat(quantityValue);
    setInnerDetails("total-cost", totalCost);
  });
}
