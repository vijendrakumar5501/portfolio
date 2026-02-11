import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        }
      );
  };

  return (
    <section className="py-20 px-6 bg-[#111827] text-white">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Get In Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-4"
      >

        <input
          name="user_name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-transparent border"
        />

        <input
          name="user_email"
          type="email"
          required
          placeholder="Email"
          className="w-full p-3 rounded bg-transparent border"
        />

        <textarea
          name="message"
          required
          rows="4"
          placeholder="Message"
          className="w-full p-3 rounded bg-transparent border"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full border py-3 rounded hover:bg-white hover:text-black"
        >
          Send Enquiry
        </motion.button>

      </motion.form>
    </section>
  );
}
