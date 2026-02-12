export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#111827]">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white inline-block border-b pb-2">
          About Me
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2 w-40 mx-auto md:mx-0">
            Experience
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Frontend Developer Intern – 2025 (6 Months)</li>
            <li>React Personal Projects</li>
            <li>UI Development with Tailwind</li>
          </ul>
        </div>

      
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-600 pb-2 w-40 mx-auto md:mx-0">
            Education
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>B.Tech Computer Science</li>
            <li>React Udemy Course – 48 Hours (2023)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
