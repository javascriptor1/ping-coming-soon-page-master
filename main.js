"use strict";

const formControl = document.querySelector("#email-form");

formControl.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEmail = document.querySelector('input[type="email"]').value;
  validateEmail(inputEmail);
});

function validateEmail(email_id) {
  if (email_id === "" || email_id === null) {
    alert("Email field cannot be empty!. 🚫");
    return;
  }

  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex_pattern.test(email_id)) {
    alert("Thank you. You have subscribed successfully. ☑");
  } else {
    alert("Please enter a valid email! 🚫");
  }
}
