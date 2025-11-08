const SkillsSection = () => {
  const skills = [
    { name: "Javascript", level: "Expert" },
    { name: "Typescript", level: "Expert" },
    { name: "React.js", level: "Expert" },
    { name: "Vue.js", level: "Advanced" },
    { name: "Tailwind", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "GraphQL", level: "Advanced" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">About me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I'm a <span className="text-foreground">front-end developer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            with a strong focus on developing <span className="text-foreground">bug-free</span> smooth user experiences. 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {skill.level}
              </div>
              <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Check out my Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
