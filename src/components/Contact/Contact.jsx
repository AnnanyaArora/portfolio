import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // ✅ Added import

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9duamc", // ✅ Your actual Service ID
        "template_fojfgoa", // ✅ Your Template ID
        form.current,
        "xppkNMT4HO4MxFzLq" // ✅ Your Public Key
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
    <section
      id="contact"
      className="relative py-20 px-6 text-gray-800 dark:text-white"
      style={{
        backgroundImage: "url('/src/assets/backgrounds/hero-bg.png')", // ✅ Same background
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔵 Animated Background Shapes */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto flex flex-col gap-4 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
