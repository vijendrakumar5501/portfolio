import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "React", level: 85, icon: <FaReact /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "Node.js", level: 70, icon: <SiNodedotjs /> },
  { name: "Git", level: 75, icon: <FaGitAlt /> },
  { name: "Java", level: 70, icon: <FaJava /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section  id="skills" className="py-20 px-6">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white transition"
          >

            <div className="flex items-center gap-3 text-xl">
              <span className="text-2xl">{skill.icon}</span>
              <p>{skill.name}</p>
            </div>

            <div className="mt-4 h-2 bg-gray-700 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>

            <p className="text-sm text-gray-400 mt-2">
              {skill.level}%
            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
