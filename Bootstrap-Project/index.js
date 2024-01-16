window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// form validation 


function validateForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var agreeCheckbox = document.getElementById('agreeCheckbox');
    var emailRadio = document.getElementById('emailRadio');
    var phoneRadio = document.getElementById('phoneRadio');
    var message = document.getElementById('message').value;

    // Validate empty fields
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
        alert('Please fill in all the required fields.');
        return false;
    }

    // Validate name (no numbers and special characters except spaces)
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name without numbers and special characters.');
        return false;
    }

    // Validate phone number (only numbers of length ten)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number of length ten.');
        return false;
    }

    // Validate checkbox
    if (!agreeCheckbox.checked) {
        alert('Please agree to the terms and conditions.');
        return false;
    }

    // Validate email (not more than one @ and no special characters including spaces)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate radio buttons
    if (!emailRadio.checked && !phoneRadio.checked) {
        alert('Please select at least one contact method.');
        return false;
    }

    // Validate message length
    if (message.length > 300) {
        alert('Message should not exceed 300 characters.');
        return false;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nContact Method: ' + (emailRadio.checked ? 'Email' : 'Phone') + '\nMessage: ' + message);
    return true;
}