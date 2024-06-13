let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");


const name_error = document.getElementById("name_error");
// const email_error = document.getElementById("email_error");
// const message_error = document.getElementById("message_error");

        
form.addEventListener('submit', (event) => {
    var email_check = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var name_check = /^[a-zA-Z\s.'-]+$/; // Regular expression for name check

    // Clear previous error messages
    name_error.innerHTML = "";
    email_error.innerHTML = "";
    message_error.innerHTML = "";

    if (name.value === '' || name.value === null) {
        event.preventDefault();
        name_error.innerHTML = "Name is required";
    } else if (!name.value.match(name_check)) {
        event.preventDefault();
        name_error.innerHTML = "Name cannot contain numbers or special characters";
    }

    if (!email.value.match(email_check)) {
        event.preventDefault();
        email_error.innerHTML = "Valid email is required";
    }

    if (message.value === '' || message.value === null) {
        event.preventDefault();
        message_error.innerHTML = "Message is required";
    }
});

