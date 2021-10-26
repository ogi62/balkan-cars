//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

//MODAL TEHNICKI PREGLED
const modalBtnTeh = document.getElementById("btn__teh");
const modalContainer = document.querySelector(".modal__container");
const closeBtn = document.querySelector(".close__btn");

//MODAL REGISTRACIJA VOZILA
const modalBtnReg = document.getElementById("btn__reg")
const registrationContainer = document.querySelector(".registration__container")
const closeRegBtn = document.getElementById("close-reg")


//   FORM 
//show input error message
const formReg = document.getElementById("form")

const username = document.getElementById("username")
const email = document.getElementById("email")
const number = document.getElementById("number")
const type = document.getElementById("car-type")
const year = document.getElementById("year")
const small = document.querySelector(".small")
const allSmall = document.querySelectorAll(".small")
const allforms = document.querySelectorAll(".form__control")


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control error";
  const small = formControl.querySelector(".small");
  small.innerText = message;
}

//show success outline 
function showSuccess (input) {
  
  const formControl = input.parentElement;
  formControl.className = 'form__control success'
}
// Check email is vaild 
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
      showSuccess(input)
  }
  else {
      showError(input,`Email is not valid`)
  }
}

//Check required field
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
      if(input.value.trim() === "") {
          showError(input,`${getFieldName(input)} is required`)
      }else {
          showSuccess(input)
      }
  })
}


/// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

/// Check input lenght
function checkLength(input, min, max) {
  if(input.value.length < min) {
      showError(input,`${getFieldName(input)} must be at least ${min} characters`)
  }else if (input.value.length > max) {
      showError(input,`${getFieldName(input)} must be less than ${max} characters`)
  }else {
      showSuccess(input)
  }
}




function numbersOnly(e,input) {
  
  let kljuc = e.keyCode
  const formControl = input.parentElement
  const small = formControl.querySelector(".small");


  if( (kljuc >= 48 && kljuc <= 57) || ( (kljuc >= 96 && kljuc <= 105) 
  || ( kljuc === 109 || kljuc === 111)  ||  (kljuc === 189 || kljuc === 220) ) 
      // Backspace and Tab and Enter Del and Ins
  || (kljuc == 8 || kljuc == 9 || kljuc == 13 || kljuc == 46 || kljuc == 45 ) )  {
    formControl.className = 'form__control success'
  } else {

    formControl.className = "form__control error";
    small.innerText = "Enter numbers only"

  }
  
}

function alert() {
  if( 
    // za ime i broj telefona
  (username.value.trim() !== "" && number.value.trim() !== "") 
  ) {

    const alertMessage = document.querySelector(".alert")
    alertMessage.innerText = `Postovani ${username.value}, bicete obavesteni o slobodnim terminima`
    alertMessage.classList.add("show__alert")

  } else {
    alertMessage.innerText = ""
  }
  
}

// EVENTS

formReg.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username,type])
  checkLength(number,9,13)
  checkLength(username,3,30)

  alert()
  
  
})

number.addEventListener("keydown", (e)=> numbersOnly(e,number))
year.addEventListener("keydown", (e)=> numbersOnly(e,year))
// END OF FORM













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


// MODALS TEHNICKI PREGLED
modalBtnTeh.addEventListener("click", function () {
  modalContainer.classList.add("open__modal");
});
closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove("open__modal");
});

// MODALS REGISTRACIJA VOZILA

modalBtnReg.addEventListener("click", () => {
 registrationContainer.classList.add("open__registration-modal")
})

closeRegBtn.addEventListener("click", () => {
  
  registrationContainer.classList.remove("open__registration-modal")

})