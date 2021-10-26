//SIDEBAR
const button = document.querySelector("#btn")
const sidebar = document.querySelector(".sidebar")

//FORM
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const number = document.getElementById("number")





//   FORM 
//show input error message

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


/// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}



//NUMBERS ONLY
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

//Event Listeners 
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username,email])
  checkLength(username, 3, 15)
  checkLength(number,9,13)
  checkEmail(email) 
  // setTimeout(clearInputValues,2000)
  
})

// keydown event
number.addEventListener("keydown", (e)=> numbersOnly(e,number))



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