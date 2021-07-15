<template>
  <div class="contact-container">
    <div class="container">
      <h1><strong>Contact</strong></h1>
      <p class="email-contact">
        You can also email me at
        <a href="mailto:rzufil@gmail.com">rzufil@gmail.com</a>.
      </p>
      <p class="email-contact">
        Or send me a message on any social media listed on the footer.
      </p>
      <form class="contact-form" id="contact-form" @submit.prevent="sendEmail">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label>Subject</label>
          <input
            type="text"
            class="form-control"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea
            class="form-control"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <input
          type="submit"
          class="btn btn-outline-secondary btn-lg contact-button"
          value="Send"
        />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            document.getElementById("contact-form").reset();
            console.log("SUCCESS!", result.status, result.text);
            alert("Thank you for sending your message!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert(
              "Error while sending your message! Please send me an email at rzufil@gmail.com"
            );
          }
        );
    },
  },
};
</script>

<style scoped>
.contact-container {
  padding: 100px 0 50px 0;
  text-align: left;
}
.form-group label {
  font-weight: bold;
}
.email-contact {
  padding: 5px;
}
.email-contact a {
  text-decoration: none;
}
</style>