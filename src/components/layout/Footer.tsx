import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">API Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your comprehensive directory of public APIs for developers
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/apis" className="text-muted-foreground hover:text-primary transition-colors">
                  All APIs
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/category/free" className="text-muted-foreground hover:text-primary transition-colors">
                  Free APIs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Popular</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/payment" className="text-muted-foreground hover:text-primary transition-colors">
                  Payment APIs
                </Link>
              </li>
              <li>
                <Link to="/category/ai-machine-learning" className="text-muted-foreground hover:text-primary transition-colors">
                  AI & ML APIs
                </Link>
              </li>
              <li>
                <Link to="/category/development" className="text-muted-foreground hover:text-primary transition-colors">
                  Developer Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 API Hub. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
