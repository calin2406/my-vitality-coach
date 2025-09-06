"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, Crown, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{
      background: 'radial-gradient(1200px 800px at 10% 0%, #1a1f3f 0%, #0f1222 60%)'
    }}>
      <div className="container mx-auto px-5 py-7 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao Início</span>
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h1 className="text-4xl font-bold text-white">Premium</h1>
            </div>
            <p className="text-slate-300 text-lg">Desbloqueie todo o potencial do My Vitality Coach</p>
          </div>
        </header>

        {/* Premium Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Star className="h-5 w-5 text-yellow-400" />
                Funcionalidades Premium
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Planos Avançados</h4>
                  <p className="text-slate-300 text-sm">Treinos e nutrição detalhados com progressão personalizada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Rotinas Completas</h4>
                  <p className="text-slate-300 text-sm">Skincare manhã/noite com produtos específicos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Acompanhamento</h4>
                  <p className="text-slate-300 text-sm">Histórico de progresso e métricas detalhadas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Lembretes Inteligentes</h4>
                  <p className="text-slate-300 text-sm">Notificações personalizadas para manter consistência</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Zap className="h-5 w-5 text-purple-400" />
                Benefícios Exclusivos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Relatórios PDF</h4>
                  <p className="text-slate-300 text-sm">Relatórios completos para imprimir e acompanhar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Suporte Prioritário</h4>
                  <p className="text-slate-300 text-sm">Atendimento rápido e personalizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Atualizações Antecipadas</h4>
                  <p className="text-slate-300 text-sm">Acesso a novas funcionalidades antes de todos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold">Sem Anúncios</h4>
                  <p className="text-slate-300 text-sm">Experiência limpa e focada nos seus objetivos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Card */}
        <Card className="bg-purple-800 border-purple-600 rounded-2xl shadow-2xl max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black text-xs font-bold mb-2">
              ⭐ POPULAR
            </div>
            <CardTitle className="text-2xl text-white mb-2">Plano Premium</CardTitle>
            <CardDescription className="text-purple-200">Transforme sua vida com acompanhamento completo</CardDescription>
            <div className="text-5xl font-black text-white mt-4">
              4,90€<span className="text-lg font-semibold text-purple-200">/mês</span>
            </div>
            <p className="text-purple-300 text-sm mt-2">Cancele a qualquer momento</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">7 dias grátis para testar</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">Acesso a todos os módulos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">Suporte via email</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-white text-sm">Atualizações incluídas</span>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-full font-bold shadow-2xl py-3"
              size="lg"
            >
              Começar Teste Grátis
            </Button>
            
            <p className="text-center text-purple-300 text-xs">
              Ao assinar, você concorda com nossos termos de serviço
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-slate-300 text-sm">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Como funciona o teste grátis?</h3>
                <p className="text-slate-300 text-sm">Você tem 7 dias para testar todas as funcionalidades premium sem custo.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Os planos são personalizados?</h3>
                <p className="text-slate-300 text-sm">Sim, todos os planos são criados com base nas suas respostas e objetivos específicos.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Preciso de equipamentos especiais?</h3>
                <p className="text-slate-300 text-sm">Não, nossos planos se adaptam aos recursos que você tem disponível.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}