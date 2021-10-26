//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

//SLIDES
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

// SCROLL ANIMATION

const containers = document.querySelectorAll(".container__animation")




// SLIDES 



const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

function scrollContainer() {
  const triggerBottom = window.innerHeight / 5 * 4

  containers.forEach(container => {
    const containerTop = container.getBoundingClientRect().top

    if(containerTop < triggerBottom) {
      container.classList.add("show")
    }else {
      container.classList.remove("show")
    }
  })
}

// END OF SLIDES


// INCREMENT COUNTER 



function scrollIncrement() {

  const counters = document.querySelectorAll(".counter")
  const box = document.querySelector(".box")
  const triggerBottom = window.innerHeight / 5 * 4
  const containerTop = box.getBoundingClientRect().top


  if(containerTop < triggerBottom) {
    counters.forEach(counter => {
  
    
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target")
    
        const c = +counter.innerText
    
        const increment = target / 60
    
        if( c < target ) {
          counter.innerText = `${Math.ceil(c + increment)}`
          
          setTimeout(updateCounter,500)
    
        }
      }
      updateCounter()
    
      
    })
  }



}

// END OF INCREMENT COUNTER




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

// slide
next.addEventListener('click', () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//slide
prev.addEventListener('click', () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// scroll animation 
window.addEventListener("scroll",scrollContainer)

// scroll INCREMENT COUNTER
window.addEventListener("scroll",scrollIncrement)
