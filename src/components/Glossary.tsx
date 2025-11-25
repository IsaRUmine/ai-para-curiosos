import { BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    {
      term: "Algoritmo",
      definition: "Conjunto de instruções passo a passo que o computador segue para resolver um problema.",
      example: "Como uma receita de bolo: você segue os passos em ordem para chegar ao resultado!"
    },
    {
      term: "Dataset",
      definition: "Coleção de dados usados para treinar uma IA. Quanto maior e mais variado, melhor!",
      example: "Para ensinar uma IA a reconhecer gatos, você precisa de milhares de fotos de gatos."
    },
    {
      term: "Bias (Viés)",
      definition: "Quando uma IA tem preconceitos ou preferências injustas por causa dos dados com que foi treinada.",
      example: "Se uma IA só viu fotos de gatos brancos, pode não reconhecer gatos de outras cores."
    },
    {
      term: "Modelo",
      definition: "O 'cérebro' treinado da IA - o resultado final do aprendizado de máquina.",
      example: "Como um músico que praticou muito e agora sabe tocar muito bem!"
    },
    {
      term: "Prompt",
      definition: "Instrução ou pergunta que você dá para uma IA, especialmente assistentes de texto.",
      example: "'Escreva uma história sobre robôs' é um prompt para uma IA generativa."
    },
    {
      term: "Rede Neural",
      definition: "Sistema de IA inspirado no cérebro humano, com camadas de 'neurônios' artificiais.",
      example: "Como uma linha de montagem: cada camada processa uma parte até chegar no resultado."
    },
    {
      term: "Treinamento",
      definition: "Processo de ensinar uma IA usando exemplos, para que ela aprenda a fazer previsões.",
      example: "Como estudar para uma prova: quanto mais você pratica, melhor você fica!"
    },
    {
      term: "Visão Computacional",
      definition: "Capacidade de uma IA 'ver' e entender imagens e vídeos.",
      example: "Filtros do Instagram que reconhecem seu rosto e aplicam efeitos."
    }
  ];

  const filteredTerms = terms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossario" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Vocabulário Essencial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Glossário Rápido de IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entenda os termos técnicos mais importantes de forma simples
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar termo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg border-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredTerms.map((item, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-primary">{item.term}</CardTitle>
                  <Badge variant="outline" className="border-primary text-primary">
                    Termo {index + 1}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground font-medium">
                  {item.definition}
                </p>
                <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-accent">💡 Exemplo:</span> {item.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum termo encontrado. Tente outra busca!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Glossary;
