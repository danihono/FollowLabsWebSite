import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Shield, Bot, GraduationCap, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Cases() {
  const cases = [
    {
      icon: Thermometer,
      title: "ColdChain Analyzer",
      category: "Logística e Transporte",
      challenge:
        "Uma empresa de logística refrigerada precisava analisar milhares de relatórios de temperatura diariamente, identificando desvios e não conformidades de forma manual, consumindo horas de trabalho e gerando atrasos na tomada de decisão.",
      solution:
        "Desenvolvemos o ColdChain Analyzer, um agente de IA capaz de ler, interpretar e analisar automaticamente relatórios de transporte refrigerado. O sistema identifica anomalias, gera alertas em tempo real e produz relatórios consolidados com insights acionáveis.",
      results: [
        "Redução de 95% no tempo de análise de relatórios",
        "Identificação automática de 100% das não conformidades",
        "Economia de 40 horas/semana de trabalho manual",
        "Melhoria de 30% na taxa de conformidade",
      ],
      testimonial:
        "O ColdChain Analyzer transformou nossa operação. O que levava dias agora é feito em minutos, com precisão absoluta.",
    },
    {
      icon: Shield,
      title: "SGQI-PRO",
      category: "Gestão da Qualidade",
      challenge:
        "Uma indústria alimentícia enfrentava dificuldades para gerenciar auditorias, POPs, não conformidades e treinamentos de forma integrada. O processo era fragmentado, com planilhas e documentos dispersos, dificultando a rastreabilidade e conformidade.",
      solution:
        "Implementamos o SGQI-PRO, uma plataforma completa de gestão da qualidade e treinamento. O sistema centraliza toda a documentação, automatiza workflows de auditoria, gerencia não conformidades e integra módulos de capacitação com dashboards em tempo real.",
      results: [
        "Centralização de 100% da documentação de qualidade",
        "Redução de 60% no tempo de preparação para auditorias",
        "Aumento de 45% na taxa de conclusão de treinamentos",
        "Melhoria de 35% nos indicadores de qualidade",
      ],
      testimonial:
        "O SGQI-PRO nos deu visibilidade total sobre nossos processos de qualidade. Agora temos controle e previsibilidade.",
    },
    {
      icon: Bot,
      title: "Robô IA Follow",
      category: "Automação Operacional",
      challenge:
        "Uma empresa de serviços precisava automatizar tarefas operacionais repetitivas, como leitura de e-mails, extração de dados, preenchimento de formulários e geração de relatórios, que consumiam grande parte do tempo da equipe.",
      solution:
        "Criamos o Robô IA Follow, um agente autônomo capaz de executar múltiplas tarefas operacionais 24/7. O robô integra-se com sistemas existentes (ERP, CRM, e-mail) e utiliza IA para tomar decisões contextuais, aprendendo continuamente com as operações.",
      results: [
        "Automação de 80% das tarefas operacionais repetitivas",
        "Operação 24/7 sem intervenção humana",
        "Redução de 70% em erros operacionais",
        "ROI positivo em 4 meses de operação",
      ],
      testimonial:
        "O Robô IA Follow é como ter um funcionário que nunca dorme e nunca erra. Revolucionou nossa operação.",
    },
    {
      icon: GraduationCap,
      title: "Coach Follow",
      category: "Treinamento e Capacitação",
      challenge:
        "Uma rede de varejo com centenas de funcionários enfrentava desafios para manter treinamentos consistentes, personalizados e mensuráveis. A taxa de engajamento era baixa e não havia visibilidade sobre o desenvolvimento individual.",
      solution:
        "Desenvolvemos o Coach Follow, uma plataforma de IA para treinamento e capacitação contínua. O sistema cria trilhas personalizadas de aprendizado, adapta o conteúdo ao ritmo de cada usuário, fornece feedback inteligente e gera relatórios de evolução em tempo real.",
      results: [
        "Aumento de 85% na taxa de engajamento em treinamentos",
        "Personalização de 100% das trilhas de aprendizado",
        "Redução de 50% no tempo médio de capacitação",
        "Melhoria de 40% nos indicadores de performance pós-treinamento",
      ],
      testimonial:
        "O Coach Follow transformou nossa cultura de aprendizado. Agora cada funcionário tem um coach pessoal de IA.",
    },
  ];

  return (
    <>
      <SEO
        title="Cases de Sucesso FollowLabs - Projetos e Resultados"
        description="Conheça nossos cases: ColdChain Analyzer, SGQI-PRO, Robô IA Follow e Coach Follow. Projetos que transformaram operações."
        keywords="cases de sucesso, projetos, coldchain analyzer, sgqi-pro, robô ia follow, coach follow, resultados"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Cases de <span className="gradient-text">Sucesso</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Conheça projetos que transformaram operações e geraram resultados mensuráveis
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5 pb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <caseItem.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {caseItem.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl mb-2">{caseItem.title}</CardTitle>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      Desafio do Cliente
                    </h3>
                    <p className="text-muted-foreground pl-5">{caseItem.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      Solução Desenvolvida
                    </h3>
                    <p className="text-muted-foreground pl-5">{caseItem.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 text-primary mr-3" />
                      Resultados Mensuráveis
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 pl-5">
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                    <blockquote className="text-foreground italic">
                      "{caseItem.testimonial}"
                    </blockquote>
                  </div>
                </CardContent>
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
              Pronto para criar seu próprio case de sucesso?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato e descubra como podemos transformar seu negócio com soluções
              inteligentes.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
