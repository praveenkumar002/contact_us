import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7dag7hc",
        "template_hpdlqne",
        form.current,
        "st-CiSH73xinu8sGK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email;
