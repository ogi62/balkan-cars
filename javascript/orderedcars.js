//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")


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

let container = document.querySelector(".container")

// fetch data and display cars 
function showCars() {
  fetch("../json/ordered-cars.json")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(container)
    data.ordered.forEach((order) => {
        container.innerHTML += `<div class="car__container">
      <div class="img__container">
            <img src="${order.slika}" alt="">
            <h1 class="car__name">${order.marka} ${order.model}</h1>
      </div>            
      <div class="car__details">
      
                <p class="car__year">${order.godiste}</p>
                <strong>USKORO</strong>
                <ul>
                    <li>${order.kilometraza}km</li>
                    <li>${order.karoserija}</li>
                    <li>${order.menjac}</li>
                    <li>${order.gorivo}</li>
                    <li>${order.kubikaza}cm3</li>
                    <li>${order.snaga}</li>
                    <li>broj vrata: ${order.broj_vrata}</li>
                    <li>broj sedista: ${order.broj_sedista}</li>
                </ul>
            </div>
        </div>`
    }).join("")
  })
}



showCars()