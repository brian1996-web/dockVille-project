const Validate = () => {
  let fullName = document.signupform.fullName;
  let email = document.signupform.email;

  let errorfullName = document.getElementById("FnameError");
  let emailError = document.getElementById("EmailError");

  if (fullName.value == "") {
    fullName.style.border = "3px solid red";
    errorfullName.textContent = "full  name is required";
    errorfullName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    fullName.focus();
    return false;
  } else if (fullName.value.length < 4) {
    fullName.style.border = "3px solid red";
    errorfullName.textContent = "must be greater than 2";
    errorfullName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    fullName.focus();
    return false;
  } else if (fullName.value.length > 15) {
    fullName.style.border = "3px solid red";
    errorfullName.textContent =
      "first  name must not be greater than 15 charactersd";
    errorfullName.style = "color: red font-size:11px";
    // fontsize:11px; fontfamily:sanserif;"
    fullName.focus();
    return false;
  } else {
    fullName.style.border = "3px solid green";
    errorfullName.textContent = "";
    email.focus();
  }

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
  }
  // } else {
  //   email.style.border = "3px solid green";
  //   emailError.textContent = "";
  //   phone.focus();
  // }
};
