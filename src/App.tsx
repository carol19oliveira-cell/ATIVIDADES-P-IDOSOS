import React, { useState, useEffect } from "react";
import {
  Star,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Lock,
  MessageCircle,
  ShoppingCart,
  Dumbbell,
  Scale,
  Brain,
  Activity,
  X,
  User,
} from "lucide-react";

// Links das ofertas (Hotmart)
const HOTMART_OFERTA_COMPLETA_URL = "https://pay.hotmart.com/R107951740S?off=631ulvre";
const HOTMART_OFERTA_BASICA_URL = "https://pay.hotmart.com/R107951740S?off=gni0eqvp";

// Pages for interactive preview slideshow
const PREVIEW_PAGES = [
  {
    src: "/assets/kit-page-flexao-anterior-DUGuJCDT.webp",
    alt: "Página do kit: Flexão anterior sentada",
  },
  {
    src: "/assets/kit-page-alongamento-coxa-CZYJU6OK.webp",
    alt: "Página do kit: Alongamento posterior da coxa",
  },
  {
    src: "/assets/kit-page-halteres-CE9AphvI.webp",
    alt: "Página do kit: Exercícios com halteres",
  },
  {
    src: "/assets/kit-page-elevacao-pes-B0MWn5n4.webp",
    alt: "Página do kit: Elevação das pontas dos pés",
  },
  {
    src: "/assets/kit-page-rotina-final-UMcZiwpq.webp",
    alt: "Página do kit: Exercícios adicionais e rotina final",
  },
  {
    src: "/assets/kit-page-marcha-parada-SgHkFm_Y.webp",
    alt: "Página do kit: Marcha estática com apoio",
  },
];

const PREVIEW_BULLETS = [
  "Exercícios ilustrados passo a passo",
  "Progressões seguras para qualquer condição física",
  "Guias prontos a imprimir e a aplicar",
  "Bónus exclusivos para casos específicos",
  "Acesso digital através do telemóvel ou computador",
];

// Testimonials data
const TESTIMONIALS = [
  {
    src: "/assets/prova-social-01-DWGWqX3d.webp",
    alt: "Conversa de WhatsApp de cliente a aprovar o material",
    w: 900,
    h: 792,
  },
  {
    src: "/assets/prova-social-02-D7uIcsCi.webp",
    alt: "Conversa de WhatsApp de cliente a elogiar o material",
    w: 900,
    h: 710,
  },
  {
    src: "/assets/prova-social-03-MPZ1nE4Q.webp",
    alt: "Conversa de WhatsApp de cliente fidelizado",
    w: 668,
    h: 589,
  },
  {
    src: "/assets/prova-social-04-CVdZaag_.webp",
    alt: "Conversa de WhatsApp a confirmar entrega do material",
    w: 668,
    h: 588,
  },
  {
    src: "/assets/prova-social-05-B5HY2NqC.webp",
    alt: "Conversa de WhatsApp de cliente satisfeito com o material",
    w: 900,
    h: 793,
  },
];

// FAQ items adapted to European Portuguese
const FAQ_ITEMS = [
  {
    q: "Como recebo o material?",
    a: "A entrega é feita através do WhatsApp! Imediatamente após a confirmação do pagamento, recebe no seu WhatsApp a ligação de acesso ao material completo, com descarregamento imediato.",
  },
  {
    q: "Funciona no telemóvel?",
    a: "Sim! Pode aceder através do telemóvel, tablet ou computador, a qualquer momento e em qualquer lugar.",
  },
  {
    q: "É necessária experiência prévia?",
    a: "Não! O material foi concebido para ser aplicado por qualquer profissional ou cuidador, independentemente do seu nível de experiência.",
  },
  {
    q: "As atividades são fáceis de aplicar?",
    a: "Sim! Todas foram criadas para serem simples, claras e prontas a utilizar. Não precisa de criar nada de raiz.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim! Imediatamente após a confirmação do pagamento, recebe o acesso direto no seu WhatsApp, na hora e sem qualquer espera.",
  },
];

// Top announcement bar with current date in Portugal timezone
function TopAnnouncementBar() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("pt-PT", {
      timeZone: "Europe/Lisbon",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const updateDate = () => setCurrentDate(formatter.format(new Date()));
    updateDate();

    const interval = window.setInterval(updateDate, 1000);
    document.addEventListener("visibilitychange", updateDate);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", updateDate);
    };
  }, []);

  return (
    <div className="w-full bg-sky-600 text-white py-3 px-4">
      <div className="max-w-3xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="text-sm sm:text-base font-extrabold tracking-wide uppercase">
          DESCONTO DE 72% APENAS HOJE {currentDate}
        </span>
      </div>
    </div>
  );
}

// Interactive Page Preview Slideshow
function PagePreviewSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PREVIEW_PAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
            Espreite algumas{" "}
            <span className="gradient-heading-blue italic">das páginas</span>
          </h2>
          <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3"></div>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-10 border-2 border-sky-100 shadow-xl shadow-sky-200/30">
          <div className="relative aspect-[3/4] sm:aspect-[4/3] max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            {PREVIEW_PAGES.map((page, index) => (
              <img
                key={page.alt}
                src={page.src}
                alt={page.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-all duration-700 ${
                  index === activeIdx
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-[0.97] pointer-events-none"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-2 mb-8" role="tablist">
            {PREVIEW_PAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIdx(index)}
                aria-label={`Ver página ${index + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  index === activeIdx
                    ? "bg-sky-600 w-8"
                    : "bg-sky-200 w-2.5 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {PREVIEW_BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100"
              >
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Testimonials Carousel
function TestimonialsCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div className="max-w-md sm:max-w-xl mx-auto relative">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-1">
              <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-lg shadow-yellow-400/20 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={item.w}
                  height={item.h}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel arrows */}
        <button
          onClick={prevSlide}
          aria-label="Testemunho anterior"
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md border border-slate-200 items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 transition cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Próximo testemunho"
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md border border-slate-200 items-center justify-center text-slate-700 hover:bg-white hover:text-slate-900 transition cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div
        className="flex justify-center gap-2 mt-4"
        role="tablist"
        aria-label="Selecionar testemunho"
      >
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIdx(idx)}
            aria-label={`Ver testemunho ${idx + 1}`}
            aria-current={currentIdx === idx}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              currentIdx === idx
                ? "w-6 bg-sky-600"
                : "w-2.5 bg-sky-200 hover:bg-sky-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// FAQ Accordion
function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenItem((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openItem === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200 px-5 transition-colors"
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left font-semibold text-sm sm:text-base cursor-pointer hover:text-sky-700 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-sky-600" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div className="pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Upsell Modal Component
function UpsellModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-[calc(100%-2rem)] max-h-[calc(100dvh-3rem)] sm:max-w-md gap-0 overflow-y-auto border-0 bg-white p-0 shadow-2xl rounded-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/20 p-1 text-white hover:bg-black/40 transition cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-offer px-5 pb-4 pt-5 text-center text-white">
          <div className="mx-auto mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
            Desconto exclusivo nesta janela
          </div>
          <h3 className="font-serif text-2xl font-black leading-tight sm:text-3xl">
            Adquira o Manual Sénior Completo por 9,90 €
          </h3>
          <p className="mx-auto mt-1 max-w-xs text-xs text-white/85 sm:text-sm">
            Todo o material e os 3 bónus por apenas mais 3,00 €.
          </p>
        </div>

        {/* Modal Body */}
        <div className="bg-offer-surface px-5 py-4">
          {/* Thumbnails */}
          <div
            className="mb-3 grid grid-cols-3 gap-2"
            aria-label="Pré-visualização do Manual Sénior Completo"
          >
            {[
              {
                src: "/assets/premium-mobilidade-CgxeSouj.webp",
                alt: "Atividades de mobilidade do Manual Sénior",
              },
              {
                src: "/assets/premium-equipamentos-hVfMFLr4.webp",
                alt: "Atividades com equipamentos do Manual Sénior",
              },
              {
                src: "/assets/premium-cognitivo-Bq3nv2V0.webp",
                alt: "Atividade cognitiva do Manual Sénior",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-sky-200 bg-white p-1 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-md object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-green-500/25 bg-white px-4 py-3 shadow-xs">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="line-through">14,90 €</span>
                <span className="rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                  33% OFF
                </span>
              </div>
              <p className="mt-0.5 text-xs font-semibold text-offer-success">
                Poupe 5,00 € agora
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-4xl font-black leading-none text-offer-success">
                9,90 €
              </div>
              <div className="mt-1 text-[10px] text-slate-500">
                pagamento único
              </div>
            </div>
          </div>

          {/* Highlights */}
          <ul className="mb-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-800">
            {[
              "+1000 atividades",
              "3 bónus incluídos",
              "Acesso vitalício",
              "Garantia de 7 dias",
            ].map((text) => (
              <li key={text} className="flex min-w-0 items-center gap-1.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-offer-success" />
                <span className="min-w-0 font-medium leading-tight">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-extrabold uppercase text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4 shrink-0" /> Quero o Manual Sénior por
            9,90 €
          </button>

          {/* WhatsApp delivery notice */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-offer-success">
            <MessageCircle className="h-3.5 w-3.5 shrink-0" /> Entrega via
            WhatsApp
          </div>

          {/* Downsell / basic link */}
          <a
            href={HOTMART_OFERTA_BASICA_URL}
            className="mt-2 flex w-full items-center justify-center py-2 text-xs font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-800 text-center cursor-pointer"
          >
            Não, quero continuar apenas com o Kit Básico
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <TopAnnouncementBar />

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="relative max-w-3xl mx-auto px-6 pt-10 pb-14 lg:pt-14 lg:pb-20 text-center">
          {/* Social Proof Badges */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex -space-x-3">
              {["/assets/is.webp", "/assets/ds.webp", "/assets/ms.webp"].map(
                (avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Profissional ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    width={96}
                    height={96}
                    loading="eager"
                    decoding="async"
                  />
                )
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                +1.700 profissionais a utilizar
              </span>
            </div>
          </div>

          {/* Hero H1 */}
          <h1 className="font-serif font-extrabold text-slate-900 leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-5">
            <span className="block">+1000</span>
            <span className="inline-block bg-sky-200/70 px-3 py-0.5 my-1">
              EXERCÍCIOS
            </span>
            <span className="block mt-1">
              ADAPTADOS PARA{" "}
              <span className="inline-block bg-sky-200/70 px-3 py-0.5">
                IDOSOS
              </span>
            </span>
          </h1>

          {/* Hero Mockup */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute -inset-4 bg-sky-300/30 rounded-3xl blur-2xl -z-10"></div>
            <img
              src="/assets/hero-mockup-Bz2nqA_j.webp"
              alt="Mockup do Manual Sénior - cartilhas de exercícios adaptados para idosos"
              className="w-full h-auto block"
              width={900}
              height={900}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Hero Subtitles */}
          <p className="font-serif italic text-lg sm:text-xl text-slate-600 mb-2">
            exercícios adaptados, organizados por nível e objetivo
          </p>
          <p className="font-serif font-bold text-xl sm:text-2xl text-sky-700 mb-3">
            para transformar as suas sessões e intervenções
          </p>
          <p className="text-2xl mb-6" aria-hidden="true">
            🧓💪
          </p>

          <div className="space-y-1 text-slate-600 mb-7">
            <p>Sem planear sessões de raiz</p>
            <p>Sem improvisar no acompanhamento</p>
          </div>

          {/* Hero CTA */}
          <button
            type="button"
            onClick={scrollToPricing}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-8 px-8 py-5 gradient-cta text-white font-extrabold text-sm sm:text-base tracking-wide rounded-full uppercase cursor-pointer"
          >
            Quero o Manual Sénior agora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Security guarantee line */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="font-medium">
              Compra 100% segura · Acesso imediato · Garantia de 7 dias
            </span>
          </div>
        </div>
      </section>

      {/* 3. PORQUE É QUE OS PROFISSIONAIS ESCOLHEM ESTE KIT */}
      <section className="px-4 pt-16 pb-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Porque é que os profissionais escolhem o{" "}
              <span className="gradient-heading-blue italic">Manual Sénior?</span>
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto mt-40 sm:mt-48 mb-10">
            <img
              src="/assets/kit-mockup-novo-ri5FhTjc.webp"
              alt="Manual Sénior: +1000 atividades e exercícios adaptados para idosos"
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] max-w-xl z-10 drop-shadow-2xl pointer-events-none"
            />
            <div className="bg-gradient-to-b from-sky-600 to-blue-700 rounded-3xl px-6 sm:px-10 pb-10 text-white space-y-5 text-base sm:text-lg leading-relaxed pt-[34%] sm:pt-[28%] shadow-xl shadow-sky-700/30">
              <p>
                O <strong>Manual Sénior</strong> é um recurso completo
                de exercícios adaptados para idosos, organizado{" "}
                <strong>por nível, objetivo e tipo de exercício</strong>,
                preparando-o para intervir, planear e conduzir cada sessão com
                total confiança, simplificando a rotina de quem trabalha
                diariamente com a terceira idade.
              </p>
              <p>
                Com o <strong>Manual Sénior</strong>, deixará de
                improvisar e passará a aplicar com <strong>clareza</strong>,
                equipado com{" "}
                <strong>
                  guias práticos, exercícios ilustrados, progressões seguras e
                  bónus exclusivos
                </strong>{" "}
                prontos a utilizar no acompanhamento individual ou em grupo.
              </p>
              <p>
                Esta é{" "}
                <strong>
                  a melhor forma de elevar a qualidade dos seus atendimentos e
                  intervenções
                </strong>
                , trabalhando com segurança e proporcionando aos seus utentes e
                pacientes maior autonomia, mobilidade e qualidade de vida no
                dia a dia.
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto">
            {[
              {
                src: "/assets/preview-equipamentos-C_O1rGk3.webp",
                title: "Exercícios c/ Equipamento",
              },
              {
                src: "/assets/preview-alongamentos-BdgvIuEW.webp",
                title: "Exercícios s/ Equipamento",
              },
              {
                src: "/assets/preview-cognitivo-BY6nc-K1.webp",
                title: "Exercícios Cognitivos",
              },
              {
                src: "/assets/guia-avaliacao-mobilidade-CpE4j_7-.webp",
                title: "Guia de Avaliação Física",
              },
            ].map(({ src, title }) => (
              <div
                key={title}
                className="bg-sky-50 rounded-2xl overflow-hidden border-2 border-sky-200 shadow-md shadow-sky-200/40 hover:shadow-xl transition flex flex-col"
              >
                <div className="bg-white/60 p-2">
                  <img
                    src={src}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={525}
                    className="w-full aspect-[4/3] object-contain"
                  />
                </div>
                <div className="px-3 py-3 text-center">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. O QUE VAI RECEBER NO MATERIAL */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              O que vai receber{" "}
              <span className="gradient-heading-blue block italic">
                no material
              </span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Brain,
                title: "Atividades cognitivas",
                desc: "Exercícios para estimular a memória, atenção, raciocínio e coordenação.",
              },
              {
                icon: Dumbbell,
                title: "Exercícios de Fortalecimento",
                desc: "Focados no ganho de força muscular e na autonomia física diária.",
              },
              {
                icon: Scale,
                title: "Exercícios de Equilíbrio",
                desc: "Treinos essenciais para prevenir quedas e melhorar a estabilidade e a postura.",
              },
              {
                icon: Activity,
                title: "Exercícios de Flexibilidade",
                desc: "Alongamentos funcionais para manter a amplitude articular e aliviar tensões.",
              },
              {
                icon: User,
                title: "Exercícios de Mobilidade",
                desc: "Atividades para melhorar o movimento das articulações e facilitar a locomoção.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-material-card-soft">
                  <Icon
                    className="h-6 w-6 text-material-card-accent"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold leading-tight text-slate-900 sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Material highlight box */}
          <div className="mt-6 rounded-3xl bg-material-highlight px-6 py-7 text-center shadow-xl shadow-material-card-accent/20 text-white">
            <p className="font-serif text-xl font-black leading-tight sm:text-2xl">
              Exercícios específicos para ginásios, clínicas e ao domicílio
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm font-normal leading-relaxed text-white/75 sm:text-base">
              Para aplicar em ginásios, clínicas, ao domicílio, lares, centros de
              dia e outros contextos profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ESPREITE ALGUMAS DAS PÁGINAS */}
      <PagePreviewSlider />

      {/* 6. A QUEM SE DESTINA ESTE MATERIAL */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              A Quem Se Destina{" "}
              <span className="gradient-heading-blue italic">
                Este Material
              </span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  "/__l5e/assets-v1/3569c750-e292-4c0e-8932-3cd407652825/avatar-fisioterapeuta.webp",
                title: "Fisioterapeutas",
                desc: "Ideal para quem procura maior variedade nas sessões. Com este kit chega a cada sessão a saber exatamente o que vai aplicar, sem improvisos.",
              },
              {
                image:
                  "/__l5e/assets-v1/f7178457-eebd-4f9b-ae9c-169894aa0b4d/avatar-educador-fisico.webp",
                title: "Profissionais de Exercício Físico",
                desc: "Perfeito para quem trabalha com grupos de idosos e necessita de atividades organizadas, seguras e prontas a aplicar no dia a dia.",
              },
              {
                image:
                  "/__l5e/assets-v1/9aeefbbb-876a-4e57-b51b-dffa09e08264/avatar-cuidadora.webp",
                title: "Cuidadores de Idosos",
                desc: "Mesmo sem formação técnica, é possível proporcionar muito mais qualidade de vida e estímulo físico com este material. É simples, seguro e direto.",
              },
            ].map(({ image, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center"
              >
                <img
                  src={image}
                  alt={title}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full object-cover mb-4 mx-auto shadow-lg shadow-slate-300/50"
                />
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECEBA TAMBÉM ESTES RECURSOS DE OFERTA (BÔNUS) */}
      <section className="px-4 py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-sky-50/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-3">
              Receba também tudo isto{" "}
              <span className="gradient-heading-blue italic">de oferta</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "/assets/bonus-mobilidade-mockup-BJNkMJi1.webp",
                title: "+40 Atividades para Idosos com Mobilidade Reduzida",
                desc: "Exercícios adaptados para idosos em cadeira de rodas ou com dificuldade em manter-se de pé. Seguros e prontos a aplicar.",
                price: "24,00 €",
              },
              {
                img: "/assets/bonus-recuperacao-mockup-BGlPTQvz.webp",
                title: "+35 Atividades para Idosos em Recuperação Física",
                desc: "Exercícios ligeiros para quem está em recuperação ou apresenta limitações físicas. Progressão segura do repouso à atividade.",
                price: "24,00 €",
              },
              {
                img: "/assets/bonus-avaliacao-mockup-BCifaTQs.webp",
                title: "Guia de Avaliação Física para Idosos",
                desc: "Aprenda a avaliar a mobilidade e as limitações antes de iniciar. Maior segurança para si, melhores resultados para o utente.",
                price: "29,00 €",
              },
            ].map((bonus) => (
              <div
                key={bonus.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition text-center flex flex-col"
              >
                <div className="bg-sky-50/60 rounded-xl mb-5 p-4">
                  <img
                    src={bonus.img}
                    alt={bonus.title}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={600}
                    className="w-full aspect-[4/3] object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">
                  {bonus.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {bonus.desc}
                </p>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wide font-bold mb-1">
                    Valor:{" "}
                    <span className="line-through">{bonus.price}</span>
                  </p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-[11px] font-bold uppercase">
                    Hoje: Grátis
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ESCOLHA A MELHOR OPÇÃO PARA SI (PRICING) */}
      <section id="pricing" className="py-16 lg:py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-3">
              Escolha a melhor{" "}
              <span className="gradient-heading-blue italic">
                opção para si
              </span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Invista em materiais de qualidade para o acompanhamento de idosos
              por um valor simbólico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* KIT BÁSICO */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-8 flex-1">
                <div className="flex justify-center mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-green-700">
                      Entrega via WhatsApp
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-black text-center text-slate-950 mb-1">
                  Manual Sénior Básico
                </h3>
                <p className="text-sky-700 font-medium text-sm text-center mb-4">
                  O essencial para começar
                </p>

                <div className="bg-slate-50 rounded-xl p-4 text-center mb-5 border border-slate-200">
                  <p className="text-slate-400 text-sm line-through font-medium">
                    19,90 €
                  </p>
                  <p className="text-5xl font-black text-green-600">6,90 €</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Pagamento único
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {[
                    "Metade do material",
                    "Atividades organizadas por nível",
                    "Aplicações práticas no acompanhamento",
                    "Acesso digital imediato",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <div className="bg-green-100 rounded-full p-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">
                  Não inclui
                </p>
                <ul className="space-y-1">
                  {[
                    "+40 Atividades para Mobilidade Reduzida",
                    "+35 Atividades para Recuperação Física",
                    "Guia de Avaliação Física para Idosos",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href={HOTMART_OFERTA_BASICA_URL}
                  className="gradient-cta w-full text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-green-500/50 hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  ACEDER AGORA
                </a>
              </div>
            </div>

            {/* KIT COMPLETO (DESTAQUE) */}
            <div className="premium-card rounded-3xl shadow-lg shadow-slate-300/40 relative flex flex-col md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-premium-badge text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm flex items-center gap-1.5 z-10">
                <Star className="w-3 h-3 fill-current" /> Mais Escolhido
              </div>

              <div className="p-8 pt-10 flex-1">
                <div className="flex justify-center mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 border border-green-300">
                    <MessageCircle className="w-3.5 h-3.5 text-green-700" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-green-800">
                      Entrega via WhatsApp
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-black text-center text-slate-950 mb-1">
                  Manual Sénior Completo
                </h3>
                <p className="text-sky-700 font-medium text-sm text-center mb-4">
                  Acesso total + bónus exclusivos
                </p>

                <div className="bg-white rounded-xl p-4 text-center mb-5 shadow-lg border border-sky-100">
                  <p className="text-slate-400 text-sm line-through">39,90 €</p>
                  <p className="text-5xl font-black text-green-600">14,90 €</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Investimento único
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    {
                      src: "/assets/premium-mobilidade-CgxeSouj.webp",
                      alt: "Página do kit: atividades de mobilidade",
                    },
                    {
                      src: "/assets/premium-equipamentos-hVfMFLr4.webp",
                      alt: "Página do kit: atividades com equipamentos",
                    },
                    {
                      src: "/assets/premium-cognitivo-Bq3nv2V0.webp",
                      alt: "Página do kit: atividade cognitiva",
                    },
                  ].map(({ src, alt }, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-1.5 border border-sky-100 shadow-sm"
                    >
                      <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        width={300}
                        height={300}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                <ul className="space-y-1 mb-4">
                  {[
                    "Manual Sénior: +1000 Atividades e Exercícios",
                    "Organizadas por nível e objetivo",
                    "Acesso digital permanente",
                    "Atualizações mensais",
                    "Apoio prioritário",
                    "Garantia de 7 dias",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 bg-sky-50/50 rounded-lg p-1.5"
                    >
                      <div className="bg-green-600 rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-800 text-sm font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] font-bold text-sky-700/70 uppercase tracking-widest mb-2">
                  Bónus incluídos
                </p>
                <ul className="space-y-1 mb-4">
                  {[
                    "+40 Atividades para Mobilidade Reduzida",
                    "+35 Atividades para Recuperação Física",
                    "Guia de Avaliação Física para Idosos",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 bg-sky-50/50 rounded-lg p-1.5 text-slate-700 text-sm"
                    >
                      <span>🎁</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href={HOTMART_OFERTA_COMPLETA_URL}
                  className="gradient-cta w-full text-white font-bold py-4 px-4 rounded-full flex items-center justify-center text-center gap-2 shadow-lg shadow-green-500/50 hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span className="text-center">QUERO O MANUAL COMPLETO!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. O QUE DIZEM OS PROFISSIONAIS (TESTEMUNHOS) */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              O Que Dizem Os{" "}
              <span className="gradient-heading-blue italic">
                Profissionais
              </span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3"></div>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* 10. GARANTIA DE 7 DIAS */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto rounded-3xl p-10 text-center bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 shadow-2xl shadow-sky-500/20">
          <img
            src="/__l5e/assets-v1/38987961-5bd5-4be4-8ad6-2339a62ae632/selo-garantia-7-dias.png"
            alt="Selo de garantia de 7 dias"
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
            className="w-36 sm:w-44 h-auto mx-auto mb-6"
          />
          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tight mb-3 leading-[1.05]">
            Garantia de{" "}
            <span className="gradient-heading-blue italic">7 Dias</span>
          </h2>
          <div className="w-20 h-1 gradient-bar mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 mb-6">
            Experimente sem qualquer risco. Se não ficar totalmente satisfeito,
            devolvemos o seu dinheiro, sem perguntas.
          </p>
          <a
            href={HOTMART_OFERTA_COMPLETA_URL}
            className="gradient-cta inline-flex items-center justify-center text-center px-8 py-4 rounded-full text-white font-bold uppercase text-sm shadow-lg shadow-green-500/50 cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 mr-2 shrink-0" />
            <span className="text-center">Comprar com segurança</span>
          </a>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Perguntas{" "}
              <span className="gradient-heading-blue italic">Frequentes</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3"></div>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Esclareça as dúvidas mais comuns antes de efetuar a sua adesão.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 12. RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 px-4 py-10 text-center text-xs sm:text-sm space-y-2">
        <div className="flex items-center justify-center gap-2 text-slate-200 font-semibold mb-3">
          <img
            src="/__l5e/assets-v1/f78b7587-2cea-4936-8782-ca3a4392ee46/manual-dos-idosos-icon.webp"
            alt="Manual Sénior"
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="h-8 w-8 rounded-full object-cover"
          />
          MANUAL SÉNIOR
        </div>



        <p>© 2026 MANUAL SÉNIOR. Todos os direitos reservados.</p>
        <p className="max-w-2xl mx-auto">
          Material licenciado para uso pessoal e profissional no acompanhamento e
          intervenção com idosos.
        </p>
        <p className="max-w-2xl mx-auto">
          Este material não dispensa a orientação médica ou de profissionais de
          saúde especializados.
        </p>
      </footer>

      {/* UPSELL MODAL */}
      <UpsellModal
        isOpen={isUpsellModalOpen}
        onClose={() => setIsUpsellModalOpen(false)}
      />
    </main>
  );
}
