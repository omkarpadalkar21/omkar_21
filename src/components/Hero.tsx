import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Avatar placeholder */}
          <div className="inline-block mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            A Fabulous
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in">
            Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Hi 👋 My name is [Your Name]. I build web apps & websites developer living in
            Canada 🍁 without worrying with the effect world.
          </p>
          
          <div className="flex gap-4 justify-center items-center animate-fade-in">
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-full px-8"
            >
              Say Hello 👋
            </Button>
          </div>
          
          {/* Wave emoji */}
          <div className="absolute top-20 right-20 text-6xl animate-pulse hidden md:block">
            👋
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
