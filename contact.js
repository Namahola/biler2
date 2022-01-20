const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;

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
