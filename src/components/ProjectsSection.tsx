import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🤗 Hugging Face",
      description: "Machine Learning models community platform",
      color: "yellow" as const,
      technologies: ["React", "Python", "TensorFlow"],
    },
    {
      title: "MEE6 Discord Bot",
      description: "Popular Discord bot for server management",
      color: "blue" as const,
      technologies: ["Node.js", "Discord.js", "MongoDB"],
    },
    {
      title: "PrestaShop",
      description: "Open-source e-commerce solution",
      color: "pink" as const,
      technologies: ["PHP", "MySQL", "Symfony"],
    },
    {
      title: "Uptoo",
      description: "Recruitment platform for sales professionals",
      color: "blue" as const,
      technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            All projects I've worked on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
