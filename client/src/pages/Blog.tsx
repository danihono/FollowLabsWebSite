import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const articles = [
    {
      title: "O futuro dos agentes de IA no ambiente corporativo",
      description:
        "Explore como os agentes de inteligência artificial estão revolucionando as operações empresariais, automatizando tarefas complexas e tomando decisões contextuais em tempo real.",
      category: "Inteligência Artificial",
      date: "15 de março de 2024",
      readTime: "8 min",
      status: "Em breve",
    },
    {
      title: "Gestão da qualidade automatizada: o papel da IA",
      description:
        "Descubra como a inteligência artificial está transformando a gestão da qualidade, desde auditorias automatizadas até análise preditiva de não conformidades.",
      category: "Gestão da Qualidade",
      date: "22 de março de 2024",
      readTime: "6 min",
      status: "Em breve",
    },
    {
      title: "Como a IA transforma o aprendizado corporativo",
      description:
        "Entenda como plataformas de IA estão personalizando trilhas de aprendizado, adaptando conteúdo ao ritmo individual e gerando insights sobre o desenvolvimento de equipes.",
      category: "Treinamento",
      date: "29 de março de 2024",
      readTime: "7 min",
      status: "Em breve",
    },
    {
      title: "Automação inteligente: além dos robôs tradicionais",
      description:
        "Conheça a nova geração de automação que combina RPA com IA generativa, criando agentes capazes de lidar com exceções e tomar decisões complexas.",
      category: "Automação",
      date: "5 de abril de 2024",
      readTime: "9 min",
      status: "Em breve",
    },
    {
      title: "ESG e tecnologia: como a IA impulsiona a sustentabilidade",
      description:
        "Veja como soluções de IA estão ajudando empresas a monitorar, medir e melhorar seus indicadores ESG, tornando a sustentabilidade mais mensurável e acionável.",
      category: "ESG",
      date: "12 de abril de 2024",
      readTime: "10 min",
      status: "Em breve",
    },
    {
      title: "Marketing digital orientado por dados e machine learning",
      description:
        "Descubra como algoritmos de machine learning estão otimizando campanhas, personalizando experiências e aumentando o ROI de estratégias de marketing digital.",
      category: "Marketing Digital",
      date: "19 de abril de 2024",
      readTime: "8 min",
      status: "Em breve",
    },
  ];

  return (
    <>
      <SEO
        title="Blog FollowLabs - Insights sobre IA e Automação"
        description="Artigos sobre IA aplicada, automação, gestão da qualidade, ESG e treinamento corporativo."
        keywords="blog, artigos, insights, IA aplicada, automação, gestão da qualidade, ESG, treinamento"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Blog <span className="gradient-text">FollowLabs</span>
            </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Insights sobre IA aplicada, automação, gestão da qualidade, ESG e treinamento
                corporativo
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Card
                    key={index}
                    className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {article.category}
                        </Badge>
                        <Badge variant="secondary">{article.status}</Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="mb-4 flex-1">
                        {article.description}
                      </CardDescription>

                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/40">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Fique por dentro das novidades
              </h2>
              <p className="text-lg text-muted-foreground">
                Em breve, você poderá se inscrever para receber nossos artigos e insights
                diretamente no seu e-mail.
              </p>
              <Button size="lg" disabled className="opacity-50">
                Newsletter em breve
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
