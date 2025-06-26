import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9duamc",                 // ✅ Your actual Service ID
       "template_fojfgoa",      // ✅ Your current (test) Template ID
        form.current,
        "xppkNMT4HO4MxFzLq"                // ✅ Your actual Public Key
      )
      .then(
        () => {
          toast.success("Message sent! 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded"
        >
          Send
        </button>
      </form>
      
    </section>
  );
};

export default Contact;
