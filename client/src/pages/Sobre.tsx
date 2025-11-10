import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import SEO from "@/components/SEO";

export default function Sobre() {
  const principles = [
    {
      icon: Target,
      title: "Missão",
      description: "Tornar a tecnologia um instrumento de evolução para pessoas e negócios.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em IA aplicada à gestão, automação e treinamento corporativo.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Inovação, ética, aprendizado contínuo, confiabilidade e impacto positivo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre a FollowLabs - Laboratório de Inovação em IA"
        description="A FollowLabs é o braço tecnológico da Follow Advisor, responsável por criar soluções de inteligência artificial, softwares e plataformas de automação empresarial."
        keywords="sobre followlabs, missão, visão, valores, inovação, follow advisor, laboratório de tecnologia"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Sobre a <span className="gradient-text">FollowLabs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              O núcleo de inovação tecnológica da Follow Advisor
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Text */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed border-l-4 border-primary pl-6">
                  A FollowLabs é o braço tecnológico da Follow Advisor, responsável por criar
                  soluções de inteligência artificial, softwares e plataformas de automação
                  empresarial. Nossa missão é transformar tecnologia em inteligência aplicada,
                  unindo inovação, aprendizado e performance.
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Princípios
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os pilares que guiam nossa atuação e definem nosso compromisso com a inovação
                tecnológica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all"></div>
                      <div className="relative w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all mx-auto">
                        <principle.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A FollowLabs é o núcleo de inovação tecnológica da Follow Advisor, criado para
                  desenvolver soluções digitais inteligentes que unem IA, automação e gestão
                  humana. Nosso posicionamento é moderno, confiável e de alta competência técnica,
                  comunicando inovação aplicada e impacto real nos negócios.
                </p>
                <p>
                  Atuamos em diferentes frentes tecnológicas: desde o desenvolvimento de agentes
                  de inteligência artificial autônomos até a criação de plataformas completas de
                  gestão da qualidade e treinamento corporativo. Cada solução é pensada para
                  transformar processos, otimizar operações e capacitar pessoas.
                </p>
                <p>
                  Nossa abordagem combina expertise técnica com profundo conhecimento de negócios,
                  permitindo que entreguemos soluções que não apenas funcionam tecnicamente, mas
                  que geram valor real e mensurável para nossos clientes.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
              <p className="text-lg text-foreground font-medium text-center italic">
                "A FollowLabs cria, transforma e entrega tecnologia que pensa junto com você."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
