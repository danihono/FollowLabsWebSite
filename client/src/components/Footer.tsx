import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                <div className="relative text-2xl font-bold text-foreground">
                  Follow<span className="text-primary">Labs</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Transformamos inovação em inteligência aplicada aos negócios. O
              laboratório de inovação da Follow Advisor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Sobre
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solucoes">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Soluções
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/laboratorio">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Laboratório
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Cases
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contato@followlabs.com.br"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>email@followlabs.com.br</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/followadvisor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} FollowLabs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
