//Code inspired by Interactive Frontend Development course materials and personal contributions
function sendMail(contactForm) {
  emailjs.send("gmail", "surfari_ireland", {
    from_name: contactForm.name.value,
    from_email: contactForm.emailaddress.value,
    message: contactForm.comments.value
  })
  .then(alert("Your message has been sent successfuly!"));
      
  $("#contact-form").text();
}