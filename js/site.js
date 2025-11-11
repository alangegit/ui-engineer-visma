function togglePassword() {
  const pwField = document.getElementById("pword");
  const currentType = pwField.getAttribute("type");
  if (currentType === "password") {
    pwField.setAttribute("type", "text");
  } else {
    pwField.setAttribute("type", "password");
  }
}

function resetFields() {
  const theForm = document.getElementById("sign-up-form");
  theForm.reset();
  return false;
}
