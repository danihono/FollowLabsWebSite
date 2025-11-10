import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Bot, Shield, Layers, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solucoes() {
  const solutions = [
    {
      icon: Bot,
      title: "Agentes de IA e Automação Inteligente",
      description:
        "Desenvolvimento de agentes autônomos para leitura de dados, análise de relatórios, emissão de documentos, monitoramento de indicadores e suporte via chat corporativo.",
      features: [
        "Integração com Power BI, ERP, WMS e CRM",
        "Análise automática de dados e relatórios",
        "Emissão de documentos inteligente",
        "Monitoramento de indicadores em tempo real",
        "Suporte via chat corporativo 24/7",
      ],
      example: "Robô IA Follow — automação operacional 24h",
    },
    {
      icon: Shield,
      title: "Software de Gestão da Qualidade e Treinamento (SGQI-PRO)",
      description:
        "Controle de qualidade, auditorias, POPs, planos de ação e treinamentos com dashboards automáticos, integração com IA e análise de desempenho.",
      features: [
        "Gestão documental completa",
        "Controle de não conformidades",
        "Indicadores de qualidade automatizados",
        "Módulo de capacitação e treinamento",
        "Dashboards em tempo real",
      ],
      example: "SGQI-PRO — Sistema completo de gestão da qualidade",
    },
    {
      icon: Layers,
      title: "Desenvolvimento de Plataformas e Aplicativos",
      description:
        "Soluções sob medida, SaaS, PWA e mobile com ambientes seguros em nuvem, API aberta e arquitetura escalável.",
      features: [
        "Desenvolvimento sob medida",
        "Arquitetura escalável e segura",
        "API aberta para integrações",
        "Soluções SaaS, PWA e mobile",
        "Infraestrutura em nuvem",
      ],
      example: "ColdChain Analyzer, Coach Follow, Plataforma ESG Digital",
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital Inteligente",
      description:
        "SEO com IA, automação de funis, geração de conteúdo e campanhas de performance baseadas em dados e machine learning.",
      features: [
        "SEO otimizado com inteligência artificial",
        "Automação de funis de vendas",
        "Geração de conteúdo com IA",
        "Campanhas baseadas em dados",
        "Análise preditiva com machine learning",
      ],
      example: "Estratégias de marketing orientadas por IA",
    },
  ];

  return (
    <>
      <SEO
        title="Soluções FollowLabs - IA, Automação e Desenvolvimento"
        description="Conheça nossas soluções: Agentes de IA, SGQI-PRO, Desenvolvimento de Plataformas e Marketing Digital Inteligente."
        keywords="soluções de IA, agentes inteligentes, SGQI-PRO, gestão da qualidade, desenvolvimento de plataformas, marketing digital"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Nossas <span className="gradient-text">Soluções</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tecnologias inteligentes que transformam processos e impulsionam resultados
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <solution.icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                  </div>

                  <div className="md:col-span-2 p-8">
                    <CardDescription className="text-base text-muted-foreground mb-6">
                      {solution.description}
                    </CardDescription>

                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Exemplo:</span> {solution.example}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para implementar essas soluções?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato e descubra como podemos transformar seu negócio com tecnologia
              inteligente.
            </p>
            <Link href="/contato">
              <Button size="lg" className="button-enhanced">Fale com nossos especialistas</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
