import { Brain, Github, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">IA Educativa</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Aprenda sobre Inteligência Artificial de forma simples, divertida e interativa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Navegação Rápida</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#fundamentos" className="hover:text-primary transition-colors">
                    Fundamentos da IA
                  </a>
                </li>
                <li>
                  <a href="#exemplos" className="hover:text-primary transition-colors">
                    IA no Dia a Dia
                  </a>
                </li>
                <li>
                  <a href="#jogos" className="hover:text-primary transition-colors">
                    IA de Jogos
                  </a>
                </li>
                <li>
                  <a href="#glossario" className="hover:text-primary transition-colors">
                    Glossário
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contato: contato@iaeducativa.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="#" className="hover:text-primary transition-colors">
                    Contribuir no GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 IA Educativa. Feito com{" "}
              <Heart className="inline w-4 h-4 text-destructive fill-destructive" />{" "}
              para estudantes curiosos.
            </p>
            <p className="text-xs">
              Projeto educativo sem fins lucrativos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
