const formElem = document.querySelector(".login-form");
const submitElem = document.querySelector(".submit-button");

formElem.addEventListener("input", (e) => {
  submitElem.disabled = !formElem.reportValidity();
  e.target.focus();
});

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  return fetch("https://669e3b999a1bda368005ee12.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(new FormData(formElem))),
  })
    .then((response) => response.json())
    .then((data) => {
      formElem.reset();
      alert(JSON.stringify(data));
    });
});
