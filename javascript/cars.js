//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

// MAIN DEO 
let cars = []

let container = document.querySelector("#container")

const opadajuce = document.getElementById("opadajuce")



// fetch data and display cars 
function fetchCars() {
  fetch("../json/cars.json")
  .then(res => res.json())
  .then(data => {

    cars = data
    // prikazacemo automobile iz niza
    showCars(cars)
  })
}

function showCars(cars) {
  

  cars.vozila.forEach(car => {

    container.innerHTML += `<div class="car__container">
          <img src="${car.slika}" alt="${car.marka}">
          <div class="car__details">
              <h1 class="car__name">${car.marka} ${car.model}</h1>
              <strong>${car.cena}$</strong>
              <p class="car__year">${car.godiste}</p>
              <ul>
                  <li>${car.kilometraza}km</li>
                  <li>${car.karoserija}</li>
                  <li>${car.menjac}</li>
                  <li>${car.gorivo}</li>
                  <li>${car.kubikaza}cm3</li>
                  <li>${car.snaga}</li>
                  <li>broj vrata:${car.broj_vrata} </li>
                  <li>broj sedista:${car.broj_sedista}</li>
              </ul>
          </div>
      </div>`
  })
}

// END OF MAIN 



window.addEventListener("load",fetchCars)
// Button events

// toggle side bar and rotate button
button.addEventListener("click", ()=> {
  sidebar.classList.toggle("show")
  button.classList.toggle("open")
})

// click and remove sidebar
document.body.addEventListener("keydown", (e)=> {
  if (e.key === "Escape"){
      sidebar.classList.remove("show")
      button.classList.remove("open")
  }
})

