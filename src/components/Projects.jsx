import crud from "../assets/crud.png"
import restro from "../assets/restro.png"
import quiz from "../assets/quiz.png"


const projects = [
    {
      title: "Restro",
      image: restro,
      github: "https://github.com/vijendrakumar5501/restro",
    },
  {
    title: "CRUD web App",
    image: crud,
    github: "https://github.com/vijendrakumar5501/crud-app",
  },
  {
    title: "quiz App",
    image: quiz,
    github: "https://github.com/vijendrakumar5501/quizapp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >

         
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

          
            <div className="p-4 bg-[#0b0f19] group-hover:bg-white group-hover:text-black transition">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 group-hover:text-gray-700 mt-2">
                Click to view on GitHub →
              </p>

            </div>

          </a>
        ))}

      </div>
    </section>
  );
}
