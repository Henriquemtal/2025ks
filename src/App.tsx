import React from 'react';
import { MessageCircle, Check, X } from 'lucide-react';
import { Testimonial, type TestimonialProps } from './components/Testimonial';
import { FAQItem, type FAQItemProps } from './components/FAQItem';
import { Calculator } from './components/Calculator';

const App = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "[...] R$3.850! Dedico 1h30 por dia.",
      author: "Márcia L.",
      role: "Ex-secretária, 38 anos",
      initials: "ML",
      colorClass: "bg-blue-400"
    },
    {
      quote: "[...] ganho 3x mais, trabalhando 70% menos.",
      author: "Roberto C.",
      role: "Ex-gerente, 45 anos",
      initials: "RC",
      colorClass: "bg-yellow-400"
    },
    {
      quote: "[...] R$6.220 no mês usando só ChatGPT!",
      author: "Ana K.",
      role: "Mãe solo, 32 anos",
      initials: "AK",
      colorClass: "bg-green-400"
    }
  ];

  const faqItems: FAQItemProps[] = [
    {
      question: "Como vou receber o acesso ao método?",
      answer: "Assim que seu pagamento for confirmado, você receberá um email da Hotmart com os dados e link para acessar a área de membros imediatamente."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "O acesso é vitalício! Você paga uma única vez e pode acessar o método, incluindo todas as atualizações futuras, para sempre."
    },
    {
      question: "Preciso ter algum conhecimento prévio?",
      answer: "Não! O método foi desenhado para iniciantes totais. Ensinamos tudo do zero, com ferramentas gratuitas ou muito acessíveis."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="fixed top-[-50vh] left-[-50vw] w-[200vw] h-[200vh] bg-gradient-radial from-primary/10 to-transparent animate-rotate z-[-1]" />
      
      <div className="container mx-auto px-4 py-16">
        {/* Promo Bar */}
        <div className="bg-gradient-to-r from-secondary to-[#F97316] text-background text-center p-4 rounded-lg font-bold mb-16">
          🔥 OFERTA DE LANÇAMENTO: ÚLTIMAS <span className="text-xl">19</span> VAGAS COM PREÇO ESPECIAL!
          <span className="block text-sm mt-1">(Garantimos suporte individualizado para esta turma inicial)</span>
        </div>

        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Fature <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">+R$3.200/mês</span>{' '}
            Com Inteligência Artificial
            <span className="block text-2xl text-primary mt-2">
              (Método Simplificado Para Iniciantes)
            </span>
          </h1>
          <p className="text-xl text-light-gray max-w-2xl mx-auto">
            Descubra o passo a passo exato, validado em Abril/2025, para criar uma nova fonte de renda com IA dedicando poucas horas por semana.
          </p>
        </header>

        {/* Video Section */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pNZDXiqkXTw"
            title="Apresentação do Método"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Check className="w-8 h-8 text-success" />,
              title: "Método Validado",
              description: "Passo a passo claro, testado e otimizado para gerar resultados rápidos."
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-primary" />,
              title: "Suporte Próximo",
              description: "Acesso a grupo VIP no WhatsApp com especialistas para tirar dúvidas."
            },
            {
              icon: <X className="w-8 h-8 text-danger" />,
              title: "Sem Complicação",
              description: "Aprenda apenas o essencial para começar a faturar com IA."
            }
          ].map((feature, index) => (
            <div key={index} className="card">
              {feature.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-light-gray">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Calculator Section */}
        <Calculator />

        {/* Testimonials Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-2">
            Resultados Reais da Turma Piloto
          </h2>
          <p className="text-center text-light-gray mb-8">
            Veja o que eles alcançaram em Abril/2025:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="card my-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Perguntas Frequentes (FAQ)
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center my-16">
          <div className="inline-block relative">
            <div className="absolute -top-6 right-0 bg-success text-white px-3 py-1 rounded-md transform rotate-3">
              GARANTIA 7 DIAS
            </div>
            <a
              href="#"
              className="btn-primary block"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://pay.hotmart.com/L99039564H';
              }}
            >
              QUERO GARANTIR MINHA VAGA AGORA!
            </a>
          </div>
          <p className="mt-4 text-light-gray">
            Acesso vitalício • Suporte individualizado • 7 dias de garantia
          </p>
        </section>

        {/* Chat Button */}
        <button 
          className="fixed bottom-8 right-8 w-14 h-14 bg-success text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Abrir chat de dúvidas"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;