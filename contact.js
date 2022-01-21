const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let messages = [];

  if (phone.length < 8) {
    messages.push("Please fill in a valid phonenumber");
  }
  if (msg.length < 1) {
    messages.push("Messagefield must be filled in");
  }
  if (messages.length > 0) {
    errorMsg.innerText = messages.join("- ");
  } else {
    success.style.display = "block";
    form.style.display = "none";
    errorMsg.innerText = "";
  }

  fetch("https://javascript.webexam-mcdm.dk/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone: phone,
      message: msg,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
