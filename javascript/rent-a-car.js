//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

// MAIN DEO 
let cars = []

let container = document.querySelector("#container")

const opadajuce = document.getElementById("opadajuce")



// fetch data and display cars 
function fetchCars() {
  fetch("../json/rent-a-car.json")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    cars = data.rentCar
    // prikazacemo automobile iz niza
    showCars(cars)
  })
}

function showCars(cars) {
  

  cars.forEach(car => {

    container.innerHTML += `<div class="rent__container">
    <div class="image__container">
        <img src="${car.slika}" alt="">
        <p class="price">od ${car.cena} €/dan</p>
    </div>
    <div class="car__details">
        <h1 class="car__name">${car.marka} ${car.model}</h1>
        <ul class="car__list">
            <li>Broj osoba: ${car.broj_sedista}</li>
            <li>Broj vrata: ${car.broj_vrata}</li>
            <li>Gorivo: ${car.gorivo}</li>
            <li>Menjac: ${car.menjac}</li>
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

