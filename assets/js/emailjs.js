$("#contact-form").on("submit", function (event) {
  event.preventDefault(); // prevent reload
  // Please See Documentation for more information. Here I Will  use EmailJS
  var formData = new FormData(this);
  formData.append("service_id", "service_yipk4xg"); //YOUR_SERVICE_ID
  formData.append("template_id", "template_71bgc2q"); //YOUR_TEMPLATE_ID
  formData.append("user_id", "cwf8kROl5o3__96Ti"); //YOUR_PUBLIC_KEY

  $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: formData,
    contentType: false, // auto-detection
    processData: false, // no need to parse formData to string
  })
    .done(function () {
      $("#emailjs-response").text("Your Massage Send successful!");
    })
    .fail(function (error) {
      $("#emailjs-response").text(
        "Oops! An error occured and your message could not be sent."
      );
    });
});
