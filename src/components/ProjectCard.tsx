import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  color: "yellow" | "blue" | "pink";
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const ProjectCard = ({ title, description, color, technologies, links }: ProjectCardProps) => {
  const colorClasses = {
    yellow: "bg-card-yellow",
    blue: "bg-card-blue", 
    pink: "bg-card-pink",
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50">
      {/* Colored header */}
      <div className={`${colorClasses[color]} h-48 flex items-center justify-center text-white transition-transform group-hover:scale-110`}>
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
      
      {/* Content */}
      <div className="p-6 bg-card space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        {links && (
          <div className="flex gap-3 pt-2">
            {links.github && (
              <a 
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {links.live && (
              <a 
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
