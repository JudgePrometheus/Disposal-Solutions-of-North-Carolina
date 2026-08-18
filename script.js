const form = document.querySelector("#quote-form");
const statusMessage = document.querySelector("#form-status");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        statusMessage.textContent =
            "Thanks! Your quote request has been received.";

        form.reset();

    });

}