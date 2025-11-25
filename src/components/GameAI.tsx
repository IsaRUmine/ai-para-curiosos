import { Gamepad2, Zap, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import gameAiImage from "@/assets/game-ai-comparison.jpg";

const GameAI = () => {
  return (
    <section id="jogos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-creative/10 rounded-full border border-creative/20">
            <Gamepad2 className="w-4 h-4 text-creative" />
            <span className="text-sm font-medium text-creative">Seção Especial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            IA de Jogos: Do Simples ao Complexo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare como a inteligência artificial evoluiu nos videogames
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={gameAiImage} 
            alt="Comparação de IA em jogos" 
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Doom Classic AI */}
          <Card className="border-2 border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-destructive text-destructive-foreground">
                  IA Clássica - 1993
                </Badge>
                <Zap className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-3xl">Doom</CardTitle>
              <CardDescription className="text-base">
                Máquinas de Estados Finitos (FSM)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-2 border-destructive/20">
                <h4 className="font-bold text-lg mb-3 text-destructive">Como Funciona:</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Os demônios do Doom seguem <strong>regras simples SE/ENTÃO</strong>:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">1.</span>
                    <span><strong>Patrulha:</strong> Anda em círculos até detectar o jogador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">2.</span>
                    <span><strong>Ataque:</strong> Se vê o jogador → corre direto e ataca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">3.</span>
                    <span><strong>Dano:</strong> Se é atingido → grita e continua atacando</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-destructive">Limitações:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✗ Não aprende com suas ações</li>
                  <li>✗ Sempre reage da mesma forma</li>
                  <li>✗ Comportamento previsível</li>
                  <li>✗ Não se adapta à estratégia do jogador</li>
                </ul>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-destructive">
                <p className="text-xs italic">
                  <strong>Analogia:</strong> É como um robô que só conhece 3 receitas e sempre faz a mesma comida!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alien: Isolation Modern AI */}
          <Card className="border-2 border-learning/20 bg-gradient-to-br from-learning/5 to-background">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-learning text-learning-foreground">
                  IA Moderna - 2014
                </Badge>
                <Brain className="w-8 h-8 text-learning" />
              </div>
              <CardTitle className="text-3xl">Alien: Isolation</CardTitle>
              <CardDescription className="text-base">
                IA Dupla: Director + Comportamental
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-2 border-learning/20">
                <h4 className="font-bold text-lg mb-3 text-learning">Como Funciona:</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Usa <strong>dois sistemas de IA trabalhando juntos</strong>:
                </p>
                <div className="space-y-3">
                  <div className="p-2 bg-primary/5 rounded border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-1">Director AI (Cérebro)</p>
                    <p className="text-xs text-muted-foreground">
                      Controla o clima do jogo: decide quando o Alien deve aparecer, se afastar ou criar tensão
                    </p>
                  </div>
                  <div className="p-2 bg-learning/5 rounded border-l-4 border-learning">
                    <p className="text-sm font-semibold text-learning mb-1">Behavioral AI (Instinto)</p>
                    <p className="text-xs text-muted-foreground">
                      Caça ativamente o jogador, aprende seus padrões e se adapta às suas táticas
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-bold text-sm text-learning">Vantagens:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Aprende com o comportamento do jogador</li>
                  <li>✓ Nunca usa a mesma estratégia duas vezes</li>
                  <li>✓ Imprevisível e adaptável</li>
                  <li>✓ Cria verdadeira tensão e medo</li>
                </ul>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-learning">
                <p className="text-xs italic">
                  <strong>Analogia:</strong> É como um predador real que aprende seus hábitos e muda de tática!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-2 border-creative/30 bg-gradient-to-r from-creative/5 to-primary/5">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">
                🎯 Por que o Alien é Considerado a Melhor IA de Jogos?
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="font-semibold mb-1">Adaptação Real</p>
                  <p className="text-xs text-muted-foreground">
                    Aprende e evolui durante a partida
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">🎭</div>
                  <p className="font-semibold mb-1">Imprevisibilidade</p>
                  <p className="text-xs text-muted-foreground">
                    Cada partida é única e diferente
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold mb-1">Inteligência Dupla</p>
                  <p className="text-xs text-muted-foreground">
                    Dois cérebros trabalhando em conjunto
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameAI;
