import { Brain, Network, Layers, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Fundamentals = () => {
  const concepts = [
    {
      icon: Brain,
      title: "O que é IA?",
      badge: "Conceito Base",
      description: "Inteligência Artificial é a capacidade de máquinas realizarem tarefas que normalmente exigiriam inteligência humana.",
      details: [
        "IA Forte: Máquinas que realmente 'pensam' como humanos (ainda não existe!)",
        "IA Fraca/Estreita: Sistemas especializados em tarefas específicas (o que temos hoje)",
        "Exemplos: Reconhecer rostos, jogar xadrez, recomendar músicas"
      ]
    },
    {
      icon: Network,
      title: "Como a IA Aprende?",
      badge: "Machine Learning",
      description: "Assim como um bebê aprende observando o mundo, a IA aprende analisando enormes quantidades de dados.",
      details: [
        "Machine Learning: A IA 'treina' com exemplos para reconhecer padrões",
        "Analogia: Como aprender a andar de bicicleta - você pratica e melhora!",
        "Quanto mais dados, melhor a IA se torna na tarefa"
      ]
    },
    {
      icon: Layers,
      title: "Redes Neurais",
      badge: "Tecnologia",
      description: "Inspiradas no cérebro humano, as redes neurais são camadas de 'neurônios' artificiais que processam informações.",
      details: [
        "Cada 'neurônio' artificial processa uma pequena parte da informação",
        "Camadas trabalham juntas para resolver problemas complexos",
        "É como uma linha de montagem: cada etapa contribui para o resultado final"
      ]
    },
    {
      icon: Lightbulb,
      title: "Tipos de IA",
      badge: "Classificação",
      description: "Existem diferentes tipos de IA, cada uma com suas próprias capacidades e limitações.",
      details: [
        "IA Reativa: Responde ao momento presente (ex: Deep Blue jogando xadrez)",
        "Memória Limitada: Aprende com experiências recentes (ex: carros autônomos)",
        "Teoria da Mente: IA que entende emoções humanas (futuro distante!)"
      ]
    }
  ];

  return (
    <section id="fundamentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Fundamentos da IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda os conceitos básicos que fazem a inteligência artificial funcionar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {concept.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{concept.title}</CardTitle>
                  <CardDescription className="text-base">
                    {concept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {concept.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent font-bold">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fundamentals;
