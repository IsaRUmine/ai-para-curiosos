import { MessageSquare, Music, Camera, Smartphone, Bot, Film } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aiDailyLife from "@/assets/ai-daily-life.jpg";

const DailyExamples = () => {
  const examples = [
    {
      icon: MessageSquare,
      title: "Assistentes de IA",
      category: "LLMs - Grandes Modelos de Linguagem",
      description: "ChatGPT, Gemini, Meta AI e LuzIA entendem e geram texto como humanos.",
      example: "Você pode fazer perguntas, pedir ajuda com lição de casa ou criar histórias!"
    },
    {
      icon: Film,
      title: "Recomendações Inteligentes",
      category: "Sistemas de Recomendação",
      description: "Netflix e Spotify aprendem seus gostos para sugerir filmes e músicas.",
      example: "Quanto mais você usa, melhor as sugestões ficam!"
    },
    {
      icon: Camera,
      title: "Filtros e Reconhecimento",
      category: "Visão Computacional",
      description: "Filtros de redes sociais e desbloqueio facial do celular usam IA.",
      example: "A IA reconhece seu rosto e aplica efeitos em tempo real!"
    },
    {
      icon: Smartphone,
      title: "Assistentes Virtuais",
      category: "Processamento de Linguagem",
      description: "Siri, Alexa e Google Assistant entendem comandos de voz.",
      example: "Diga 'toque minha playlist favorita' e a IA entende e executa!"
    },
    {
      icon: Bot,
      title: "Tradutores Instantâneos",
      category: "Processamento de Linguagem",
      description: "Google Tradutor usa IA para traduzir textos e conversas ao vivo.",
      example: "Aprende com milhões de textos em diferentes idiomas!"
    },
    {
      icon: Music,
      title: "Criação de Conteúdo",
      category: "IA Generativa",
      description: "IAs podem criar músicas, imagens e até códigos de programação.",
      example: "Ferramentas como DALL-E criam imagens a partir de descrições!"
    }
  ];

  return (
    <section id="exemplos" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            IA no Seu Dia a Dia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Você provavelmente já usa IA todos os dias sem perceber!
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={aiDailyLife} 
            alt="IA no cotidiano" 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <p className="text-xs text-primary font-semibold">{example.category}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground font-medium">
                    {example.description}
                  </p>
                  <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-learning">
                    <p className="text-xs text-muted-foreground italic">
                      💡 <strong>Exemplo:</strong> {example.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DailyExamples;
