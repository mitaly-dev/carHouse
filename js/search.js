document.getElementById("search").addEventListener("click", function () {
  document.getElementById("all-cars").innerHTML = " ";
  let searchValue = getInputValue("searchInput");
  for (let cars of websiteCars) {
    if (cars.name.toLowerCase() == searchValue.toLowerCase()) {
      displayCar(cars);
    }
  }
});
