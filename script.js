const inputNumber = document.querySelector("#number-input");
const outputNumber = document.querySelector("#holder-number-output");
const numberError = document.querySelector("#number-error");

const nameOutput = document.querySelector("#holder-name-output");
const nameInput = document.querySelector("#name-input");
const nameError = document.querySelector("#name-error");

const yearOutput = document.querySelector("#date-output-year");
const yearInput = document.querySelector("#dateInput-year");
const yearError = document.querySelector("#year-error");

const monthOutput = document.querySelector("#date-output-month");
const monthInput = document.querySelector("#dateInput-month");
const monthError = document.querySelector("#month-error");

const completeForm = document.querySelector(".complete")
const form = document.querySelector("#form-info")
const submit = document.querySelector(".submit");
const contBtn = document.querySelector(".continue");

submit.addEventListener("click", submitFunction);
contBtn.addEventListener("click", contFunction);

let isValid = true;


inputNumber.addEventListener("input",(e) => {
   let myInput = e.target.value;
   let regExp1 = /^[0-9]+$/g;
   let regPattern = regExp1.test(myInput);

   if (myInput.length < 5) {
      outputNumber.innerHTML = myInput;
      isValid =true;
   }else {
      isValid = false;
   }
   
   if (myInput.length < 10) {
      outputNumber.innerHTML = `${myInput.slice(0,4)} ${myInput.slice(4)}`;
      isValid = true;
   }else {
      isValid = false;
   }

   if (myInput.length < 17) {
      outputNumber.innerHTML = `${myInput.slice(0,4)} ${myInput.slice(4,8)} ${myInput.slice(8,12)} ${myInput.slice(12,20)}`;
      isValid = true;
   }else {
      isValid = false;
   }

   if (myInput.length > 17) {
      numberError.innerHTML = "numbers must be less than 16";
      isValid = false;
   }else {
      isValid = true;
   }

   if (!regPattern) {
      numberError.innerHTML = "Wrong format, numbers only";
      isValid = false
   }else {
      isValid = true;
   }
})

nameInput.addEventListener("input", (e) => {
   let myNameInput = e.target.value;
   let regExp2 = /^[A-Za-z\s]+$/g;
   let namePattern = regExp2.test(myNameInput);

   if (!namePattern) {
      nameError.innerHTML = "Wrong format, alphabets only";
      isValid = false;
   }else {
      nameOutput.innerHTML = myNameInput;
      isValid;
   }
})

monthInput.addEventListener("input", (e) => {
   let myMonthInput = e.target.value;
   if (myMonthInput  > 12) {
      monthError.innerHTML = "wrong input";
      alert("There are only 12 months");
      isValid = false
   }else {
      monthOutput.innerHTML = myMonthInput;
      isValid;
   }
})

yearInput.addEventListener("input", (e) => {
   yearOutput.innerHTML = yearInput.value;
   if (e.target.value > 23 ) {
      yearError.innerHTML = "wrong input";
      alert("Year must be less than 24");
      isValid = false;
   }else {
      isValid;
   }
})


function submitFunction(e) {
   e.preventDefault();
   if (isValid === false || inputNumber.value === "") {
      numberError.innerHTML = "input must be filled";
   }else if (isValid === true) {
      form.style.display = "none";
      completeForm.style.display = "block";
   }

   if (isValid === false || nameInput.value === "") {
      nameError.innerHTML = "input must be filled";
   }else if (isValid === true) {
      form.style.display = "none";
      completeForm.style.display = "block";
   }

   if (isValid === false || monthInput.value === "") {
      monthError.innerHTML = "fill input";
   }else if (isValid === true) {
      form.style.display = "none";
      completeForm.style.display = "block";
   }

   if (isValid === false || yearInput.value === "") {
      yearError.innerHTML = "fill input";
   }else if (isValid === true) {
      form.style.display = "none";
      completeForm.style.display = "block";
   }
}

function contFunction() {
   window.location.reload(true);
   form.style.display = "block";
   completeForm.style.display = "flex";
   completeForm.style.flexDirection = "column";
   completeForm.style.alignItems = "center";
}