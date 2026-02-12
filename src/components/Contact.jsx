import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      e.target.reset();
    }
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
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-4"
      >

        <input
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-transparent border"
        />

        <input
          name="email"
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
          disabled={loading}
          type="submit"
          className="w-full border py-3 rounded hover:bg-white hover:text-black"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </motion.button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully ✔
          </p>
        )}

      </motion.form>

      <div className="flex justify-center gap-6 pt-6">

  <motion.a
    whileHover={{ scale: 1.2 }}
    href="https://github.com/vijendrakumar5501"
    target="_blank"
    className="text-3xl hover:text-gray-300"
  >
    <FaGithub />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.2 }}
    href="https://www.linkedin.com/in/vijendrakumar5501/"
    target="_blank"
    className="text-3xl hover:text-blue-400"
  >
    <FaLinkedin />
  </motion.a>

</div>


      
    </section>
  );
}
