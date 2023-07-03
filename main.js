"use strict";

const formControl = document.querySelector("#email-form");
const errorMessage = document.querySelector(".error-message");
const errorMessageInvalid = document.querySelector(".error-message-invalid");
const inputField = document.querySelector('input[type="email"]');

formControl.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector('input[type="email"]').value;
  validateEmail(inputEmail);
});

function validateEmail(email_id) {
  if (email_id === "" || email_id === null) {
    errorMessage.classList.remove('hidden');
    inputField.classList.add('error-border');
    setTimeout(function(){
      errorMessage.classList.add('hidden');
      inputField.classList.remove('error-border');

    },3000)
    return;
  }

  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    alert("Thank you. You have subscribed successfully. ☑");
  } else {
    errorMessageInvalid.classList.remove('hidden');
    inputField.classList.add('error-border');
    setTimeout(function(){
      errorMessageInvalid.classList.add('hidden');
      inputField.classList.remove('error-border');
    },3000)
  }
}
