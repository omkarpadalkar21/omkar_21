import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Contact me</p>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to develop your next big thing?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm text-muted-foreground uppercase">Chat</p>
              <Button 
                variant="outline" 
                className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50"
              >
                Discord
              </Button>
            </div>

            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm text-muted-foreground uppercase">Connect</p>
              <Button 
                variant="outline"
                className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="pt-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 - All rights reserved</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button className="text-xs uppercase tracking-wider hover:text-primary transition-colors">
              Created with ❤️
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
