const Validate = () => {
  // picking input fields with their names

  let firstName = document.signupform.firstname;
  let lastName = document.signupform.lastname;
  let phone = document.signupform.phone;
  let email = document.signupform.email;
  let car = document.signupform.car;
  let Nplate = document.signupform.Nplate;
  let nin = document.signupform.nin;
  // picking error fields

  let errorfirstName = document.getElementById("FnameError");
  let errorlastName = document.getElementById("LnameError");
  let phoneError = document.getElementById("phoneError");
  let emailError = document.getElementById("emailError");
  let carTypeError = document.getElementById("carTypeError");
  let NplateError = document.getElementById("Nplate-Error");
  let ninError = document.getElementById("nin-error");
  // validating first name input
  // validating for emptiness

  if (firstName.value == "") {
    firstName.style.border = "3px solid red";
    errorfirstName.textContent = "first  name is required";
    errorfirstName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "3px solid red";
    errorfirstName.textContent = "must be greater than 2";
    errorfirstName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    firstName.focus();
    return false;
  } else if (firstName.value.length > 15) {
    firstName.style.border = "3px solid red";
    errorfirstName.textContent =
      "first  name must not be greater than 15 charactersd";
    errorfirstName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "3px solid green";
    errorfirstName.textContent = "";
    lastName.focus();
  }
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    errorlastName.textContent = "Last name is required";
    errorlastName.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    lastName.focus();
    return false;
  } else {
    lastName.style.border = "3px solid green";
    errorlastName.textContent = "";
    email.focus();
  } // validation for Email
  if (email.value == "") {
    email.style.border = "1px solid red";
    emailError.textContent = "Email is required";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
  // let emailRegex =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "The email address should be valid";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  } else {
    email.style.border = "3px solid green";
    emailError.textContent = "";
    phone.focus();
  }
  // Validating Phone number.
  const phoneRegex = /^\+256\d{9}$/;

  if (phone.value == "") {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    return false;
  } else if (!phoneRegex.test(phone.value)) {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number should start with +256";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    return false;
  } else {
    phone.style.border = "3px solid green";
    car.focus();
  }
  // validation for car type.
  if (car.value == "") {
    car.style.border = "1px solid red";
    carTypeError.textContent = "Select a car type";
    carTypeError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    car.focus();
    return false;
  } else {
    car.style.border = "3px solid green";
    Nplate.focus();
  }
  if (Nplate.value == "") {
    Nplate.style.border = "3px solid red";
    NplateError.textContent = "first  name is required";
    NplateError.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    Nplate.focus();
    return false;
  } else {
    Nplate.style.border = "3px solid green";
    nin.focus();
  }
  // Validating for NIN
  const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
  const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;

  if (nin.value == "") {
    nin.style.border = "1px solid red";
    ninError.textContent = "NIN is required";
    ninError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    return false;
  } else if (!(ninRegex.test(nin.value) || ninRegex2.test(nin.value))) {
    nin.style.border = "1px solid red";
    ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
    ninError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    return false;
  } else {
    nin.style.border = "1px solid green";
    ninError.textContent = "";
  }
};
