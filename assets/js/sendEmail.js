//Code inspired by Interactive Frontend Development course materials and personal contributions


function sendMail(contactForm) {
    emailjs.send("gmail", "surfari_ireland", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.comments.value
    })
    .then(alert("Thank you! You email has been sent"));

  return false;
}