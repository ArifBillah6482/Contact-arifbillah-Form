const name_ = document.getElementById("name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const alertText = document.querySelector(".alertText");
const form = document.querySelector(".form");
//////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertText.textContent = "Sending...";
  axios
    .post("https://contact-arifbillah.herokuapp.com/data", {
      name: name_.value,
       email: email.value,
      msg: msg.value,
    })
    .then(() => {
      alert("Your information has been sent.");
      alertText.textContent = "Your information has been sent.";
    })
    .catch((err) => console.log(err));
});
