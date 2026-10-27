const form = document.querySelector("#request-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#form-message");
    message.textContent = "Prototype only: no request was saved. Backend integration will be added after the database and secure Edge Functions are ready.";
  });
}