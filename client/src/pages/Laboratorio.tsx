import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Beaker, Cpu, Zap, Code2 } from "lucide-react";

export default function Laboratorio() {
  const agents = [
    {
      name: "Robô ColdChain",
      description: "Análise automática de relatórios de transporte refrigerado com IA",
      status: "Ativo",
    },
    {
      name: "Coach Follow",
      description: "Agente de IA para treinamento e capacitação contínua",
      status: "Ativo",
    },
    {
      name: "SGQI-PRO Agent",
      description: "Automação inteligente para gestão da qualidade",
      status: "Em desenvolvimento",
    },
    {
      name: "Marketing AI Assistant",
      description: "Geração de conteúdo e otimização de campanhas",
      status: "Beta",
    },
  ];

  const technologies = [
    { name: "Python", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Design" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "Power BI", category: "Analytics" },
    { name: "GPTs Personalizados", category: "IA" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "FastAPI", category: "API" },
    { name: "LangChain", category: "IA" },
  ];

  return (
    <>
      <SEO
        title="Laboratório de Inovação FollowLabs - P&D em IA"
        description="Espaço de pesquisa, desenvolvimento, open innovation e prototipagem de soluções inteligentes com as mais modernas tecnologias."
        keywords="laboratório de inovação, P&D, pesquisa e desenvolvimento, open innovation, prototipagem, agentes de IA"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Beaker className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">P&D e Inovação</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Laboratório de <span className="gradient-text">Inovação</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Espaço de pesquisa, desenvolvimento, open innovation e prototipagem de soluções
              inteligentes
            </p>
          </div>
        </div>
      </section>

      {/* About Lab Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    O Laboratório de Inovação da FollowLabs é o coração da nossa operação de
                    pesquisa e desenvolvimento. Aqui, exploramos as fronteiras da inteligência
                    artificial, automação e tecnologias emergentes para criar soluções que
                    transformam negócios.
                  </p>
                  <p>
                    Trabalhamos com metodologias ágeis, prototipagem rápida e open innovation,
                    colaborando com parceiros, universidades e comunidades de tecnologia para
                    desenvolver as melhores soluções do mercado.
                  </p>
                  <p>
                    Nosso laboratório é equipado com as mais modernas ferramentas e frameworks,
                    permitindo que nossa equipe experimente, teste e valide novas ideias de forma
                    rápida e eficiente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Agents Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Cpu className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Agentes Ativos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mostruário de Agentes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os agentes de IA que estamos desenvolvendo e já estão em operação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <Badge
                        variant={agent.status === "Ativo" ? "default" : "secondary"}
                        className={
                          agent.status === "Ativo"
                            ? "bg-primary/20 text-primary border-primary/30"
                            : ""
                        }
                      >
                        {agent.status}
                      </Badge>
                    </div>
                    <CardDescription>{agent.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Stack Tecnológico</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tecnologias Utilizadas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ferramentas e frameworks de ponta que utilizamos para desenvolver nossas soluções
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-2">
                      <Zap className="h-6 w-6 text-primary mx-auto" />
                    </div>
                    <p className="font-semibold text-foreground mb-1">{tech.name}</p>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
            <Beaker className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tem uma ideia inovadora?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso laboratório está sempre aberto para colaborações e projetos de open innovation.
              Vamos construir o futuro juntos.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
