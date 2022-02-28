function validateForm() {

    // validate name
    if (document.contactForm.fullName.value == "") {
        alert("Please enter a name");
        document.contactForm.fullName.focus();
        return false;
    }

    // validate email address
    if (document.contactForm.emailAddress.value == "") {
        alert("Please enter an email address");
        document.contactForm.emailAddress.focus();
        return false;

    } 

    // validate message
    if (document.contactForm.messageBox.value == "") {
        alert("Please enter a message");
        document.contactForm.messageBox.focus();
        return false;
    }

    // complete action to confirmation page
    else {
        document.getElementById('contactForm').action = "confirmation.html";
        return true;
    }
}

// check to validate if email is in correct format

function validateEmail(){

    // email characters
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (document.contactForm.emailAddress.value.match(emailFormat)) {
        return true;
    } 
    
    else {
        alert("Please enter a valid email address");
        document.contactForm.emailAddress.focus();
        return false;
    }

}