import { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send, Bot, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    // Simulação de envio e resposta de IA
    setTimeout(() => {
      const response = `Olá ${formData.name}! 👋\n\nObrigado por entrar em contato com a FollowLabs. Recebi sua mensagem sobre "${formData.message.substring(0, 50)}${formData.message.length > 50 ? "..." : ""}".\n\nNossa equipe de especialistas irá analisar sua solicitação e retornará em até 24 horas com uma proposta personalizada. ${formData.company ? `Estamos animados para conhecer mais sobre ${formData.company} e como podemos ajudar!` : ""}\n\nEnquanto isso, convido você a explorar nossos cases de sucesso e conhecer mais sobre nossas soluções.\n\nAtenciosamente,\nAgente IA FollowLabs 🤖`;

      setAiResponse(response);
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso!");
    }, 2000);
  };

  return (
    <>
      <SEO
        title="Contato FollowLabs - Fale com Nossos Especialistas"
        description="Entre em contato com a FollowLabs. Nosso agente de IA responde imediatamente e nossa equipe retorna em até 24 horas."
        keywords="contato, fale conosco, atendimento, especialistas, agente de IA, followlabs"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Fale com nossos especialistas e traga sua ideia para o futuro
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e nosso agente de IA responderá imediatamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome completo"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Nome da sua empresa"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Conte-nos sobre seu projeto ou necessidade..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full button-enhanced" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Bot className="mr-2 h-4 w-4 animate-pulse" />
                            Processando com IA...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Enviar mensagem
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center justify-center space-x-2 text-primary">
                        <CheckCircle2 className="h-8 w-8" />
                        <span className="text-xl font-semibold">Mensagem enviada!</span>
                      </div>

                      <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-start space-x-3 mb-3">
                          <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">
                              Resposta do Agente IA
                            </p>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">
                              {aiResponse}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", company: "", message: "" });
                          setAiResponse("");
                        }}
                        variant="outline"
                        className="w-full"
                      >
                        Enviar nova mensagem
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                  <CardDescription>
                    Entre em contato diretamente pelos nossos canais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">E-mail</p>
                      <a
                        href="mailto:contato@followlabs.com.br"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@followlabs.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/followadvisor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        /followlabs
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">GitHub</p>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        /followlabs
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Atendimento com IA
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Nosso formulário utiliza um agente de IA para fornecer respostas
                        imediatas. Para questões mais complexas, nossa equipe entrará em contato
                        em até 24 horas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
