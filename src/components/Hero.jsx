import { motion } from "framer-motion";
import vk from "../assets/vk.jpg"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center px-6">

    
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-44 h-44 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
        >
          <img
            src={vk}
            className="rounded-full contain-content w-40 h-40"
          />
        </motion.div>
      </motion.div>

  
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold mt-6"
      >
        Hi, I'm Vijendra Kumar
      </motion.h1>

   
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-400 mt-2"
      >
        Frontend Developer
      </motion.p>

     
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-xl text-gray-500 mt-4"
      >
        I build modern web applications using React, Tailwind & JavaScript.
      </motion.p>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-4 mt-6"
      >
        <motion.a
  whileHover={{ scale: 1.1 }}
  href="/vijendra-resume.pdf"
  download
  className="px-6 py-2 border rounded hover:bg-white hover:text-black inline-block"
>
  Download CV
</motion.a>


        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 border rounded hover:bg-white hover:text-black"
        >
          Let’s Collaborate
        </motion.button>
      </motion.div>

    </section>
  );
}
