import { Button } from "@/components/ui/button";
import { Bot, Cog, Smartphone, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import SpecialtyCard from "@/components/SpecialtyCard";

export default function Home() {
  const highlights = [
    {
      icon: Bot,
      title: "Agentes de IA e Automação",
      description: "Desenvolvimento de agentes autônomos para leitura de dados, análise de relatórios e automação operacional 24h.",
      details: [
        "Processamento de linguagem natural",
        "Análise preditiva e prescritiva",
        "Integração com sistemas legados",
        "Monitoramento contínuo 24/7"
      ]
    },
    {
      icon: Cog,
      title: "Gestão da Qualidade e Treinamento",
      description: "Software completo para controle de qualidade, auditorias, POPs e capacitação com dashboards automáticos.",
      details: [
        "Auditorias digitais automatizadas",
        "Gestão de não conformidades",
        "Trilhas de aprendizado personalizadas",
        "Relatórios e indicadores em tempo real"
      ]
    },
    {
      icon: Smartphone,
      title: "Plataformas e Aplicativos",
      description: "Soluções sob medida, SaaS, PWA e mobile com arquitetura escalável e segura em nuvem.",
      details: [
        "Desenvolvimento full-stack moderno",
        "Arquitetura em microsserviços",
        "Deploy automatizado e CI/CD",
        "Segurança e compliance garantidos"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital Inteligente",
      description: "SEO com IA, automação de funis e campanhas de performance baseadas em dados e machine learning.",
      details: [
        "Otimização de campanhas com IA",
        "Segmentação avançada de audiência",
        "Automação de marketing multicanal",
        "Análise de ROI e atribuição"
      ]
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FollowLabs",
    "description": "Laboratório de inovação da Follow Advisor especializado em IA e automação",
    "url": "https://followlabs.com.br",
    "logo": "https://followlabs.com.br/logo.png",
    "sameAs": [
      "https://linkedin.com/company/followlabs",
      "https://github.com/followlabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contato@followlabs.com.br",
      "contactType": "Customer Service"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="FollowLabs - Transformamos inovação em inteligência aplicada aos negócios"
        description="A FollowLabs desenvolve softwares, agentes de IA e plataformas inteligentes que automatizam processos, capacitam pessoas e impulsionam resultados."
        keywords="inteligência artificial, automação, agentes de IA, gestão da qualidade, treinamento corporativo, desenvolvimento de software, machine learning, FollowLabs, Follow Advisor"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
       {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/background.png')",
  }}
>
  {/* Overlay escuro opcional */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Luzes decorativas */}
  <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
</div>


        <div className="container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Inovação em IA e Automação.</span>
            </div>

            <AnimatedText
              text="Transformamos inovação em"
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
            />
            <AnimatedText
              text="inteligência aplicada"
              className="text-4xl md:text-6xl font-bold gradient-text leading-tight"
              delay={0.5}
            />
            <AnimatedText
              text="aos negócios"
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              delay={1}
            />

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A FollowLabs desenvolve softwares, agentes de IA e plataformas inteligentes que
              automatizam processos, capacitam pessoas e impulsionam resultados.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contato">
                <Button size="lg" className="group button-enhanced">
                  Descubra como a IA pode transformar sua operação
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/solucoes">
                <Button size="lg" variant="outline">
                  Conheça nossas soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossas Especialidades
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluções tecnológicas que unem inteligência artificial, automação e gestão humana
                para transformar negócios.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <SpecialtyCard
                  icon={highlight.icon}
                  title={highlight.title}
                  description={highlight.description}
                  details={highlight.details}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Pronto para transformar sua operação?
              </h2>
              <p className="text-lg text-muted-foreground">
                A FollowLabs cria, transforma e entrega tecnologia que pensa junto com você.
              </p>
              <Link href="/contato">
                <Button size="lg" className="group button-enhanced">
                  Fale com nossos especialistas
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
