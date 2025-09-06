"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { useAuth } from "@/contexts/auth-context";
import { Footer } from "@/components/footer";

export default function Home() {
  const { user } = useAuth();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{
      background: 'radial-gradient(1200px 800px at 10% 0%, #1a1f3f 0%, #0f1222 60%)'
    }}>
      <Header />
      
      <div className="container mx-auto px-5 py-7 max-w-6xl">
        {/* Hero Section */}
        <main className="text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-100 leading-tight">
            O Seu Coach Inteligente para{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Corpo, Pele e Mente
            </span>
          </h1>
          <p className="text-slate-400 mb-7 max-w-4xl mx-auto text-lg leading-relaxed">
            Planos personalizados de emagrecimento, skincare e saúde. Tudo num só app, 
            com recomendações baseadas em ciência + inteligência artificial.
          </p>

          {/* Benefits List */}
          <ul className="list-none p-0 m-0 mb-7 max-w-2xl mx-auto text-left space-y-3">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 font-black mt-0.5 flex-shrink-0" />
              <span className="text-slate-200">Planos de treino e nutrição ajustados ao seu objetivo</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 font-black mt-0.5 flex-shrink-0" />
              <span className="text-slate-200">Rotinas de skincare manhã e noite personalizadas</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 font-black mt-0.5 flex-shrink-0" />
              <span className="text-slate-200">Hábitos de saúde: sono, stress e hidratação</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 font-black mt-0.5 flex-shrink-0" />
              <span className="text-slate-200">Lembretes inteligentes para manter consistência</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-400 font-black mt-0.5 flex-shrink-0" />
              <span className="text-slate-200">Relatórios Premium em PDF com histórico de progresso</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Button 
              id="quiz"
              size="lg" 
              onClick={() => scrollToSection('features')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-2xl px-6 py-3"
            >
              Começar Quiz
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('features')}
              className="bg-transparent border-slate-600 text-slate-100 hover:bg-slate-800 rounded-full font-bold px-6 py-3"
            >
              Ver Funcionalidades
            </Button>
          </div>
        </main>

        {/* Quick Access to Modules */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-100 text-center">Comece Agora</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/emagrecimento">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-105 cursor-pointer hover:bg-white/15">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    🏋️
                  </div>
                  <CardTitle className="text-lg text-white">Emagrecimento</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            
            <Link href="/skincare">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-105 cursor-pointer hover:bg-white/15">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    💆
                  </div>
                  <CardTitle className="text-lg text-white">Skincare</CardTitle>
                </CardHeader>
              </Card>
            </Link>
            
            <Link href="/lifestyle">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-105 cursor-pointer hover:bg-white/15">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    ✨
                  </div>
                  <CardTitle className="text-lg text-white">Lifestyle</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-20">
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white mb-2">Gratuito</CardTitle>
                <CardDescription className="text-slate-300">Para começar hoje mesmo</CardDescription>
                <div className="text-4xl font-black text-white mt-2">0€</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm">Acesso básico aos 3 módulos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm">1 plano simples de emagrecimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm">1 rotina de skincare básica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm">Checklists de hábitos</span>
                  </li>
                </ul>
                <Link href="/emagrecimento" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60 rounded-full font-bold"
                  >
                    Usar Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-purple-800 border-purple-600 rounded-2xl shadow-2xl">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black text-xs font-bold mb-2">
                  ⭐ POPULAR
                </div>
                <CardTitle className="text-xl text-white mb-2">Premium</CardTitle>
                <CardDescription className="text-purple-200">Resultados completos e acompanhamento</CardDescription>
                <div className="text-4xl font-black text-white mt-2">
                  4,90€<span className="text-base font-semibold text-purple-200">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Planos de treino & nutrição avançados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Rotinas de skincare detalhadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Histórico de progresso e métricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Lembretes inteligentes diários</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Relatórios em PDF</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-400 font-black mt-1 flex-shrink-0" />
                    <span className="text-white text-sm font-medium">Suporte prioritário</span>
                  </li>
                </ul>
                <Link href="/premium">
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-2xl border-0">
                    Assinar Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}