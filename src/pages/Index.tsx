import Hero from "@/components/Hero";
import Fundamentals from "@/components/Fundamentals";
import DailyExamples from "@/components/DailyExamples";
import GameAI from "@/components/GameAI";
import Glossary from "@/components/Glossary";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Fundamentals />
      <DailyExamples />
      <GameAI />
      <Glossary />
      <Footer />
    </div>
  );
};

export default Index;
