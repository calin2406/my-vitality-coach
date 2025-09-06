"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{
      background: 'radial-gradient(1200px 800px at 10% 0%, #1a1f3f 0%, #0f1222 60%)'
    }}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar ao Início</span>
        </Link>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 text-white">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
          
          <div className="space-y-6 text-slate-200">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">1. Introdução</h2>
              <p>
                Bem-vindo à Política de Privacidade do My Vitality Coach. Este documento explica como coletamos, usamos, armazenamos e protegemos seus dados pessoais quando você utiliza nosso aplicativo e serviços relacionados.
              </p>
              <p className="mt-2">
                Ao utilizar o My Vitality Coach, você concorda com as práticas descritas nesta política. Revisamos regularmente nossas práticas para garantir a proteção dos seus dados.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">2. Dados que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Informações de cadastro (nome, e-mail, senha)</li>
                <li>Informações de perfil (foto, idade, altura, peso)</li>
                <li>Informações de saúde (objetivos, métricas corporais, hábitos)</li>
                <li>Dados de utilização do aplicativo (interações, preferências)</li>
                <li>Informações de dispositivo (modelo, sistema operacional)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">3. Como Utilizamos seus Dados</h2>
              <p>Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Fornecer planos personalizados de nutrição, treino e bem-estar</li>
                <li>Melhorar nossos serviços e funcionalidades</li>
                <li>Processar pagamentos de assinaturas</li>
                <li>Enviar notificações e comunicações relevantes</li>
                <li>Gerar estatísticas e relatórios de progresso</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">4. Compartilhamento de Dados</h2>
              <p>
                Não vendemos seus dados pessoais a terceiros. Podemos compartilhar dados com:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provedores de serviços (processamento de pagamentos, hospedagem)</li>
                <li>Parceiros para melhorar a experiência do usuário</li>
                <li>Autoridades quando exigido por lei</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">5. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, firewalls e procedimentos de segurança regulares.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">6. Seus Direitos</h2>
              <p>Você tem direito a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Excluir seus dados (direito ao esquecimento)</li>
                <li>Restringir ou opor-se ao processamento dos seus dados</li>
                <li>Solicitar portabilidade dos seus dados</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">7. Cookies e Tecnologias Similares</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, lembrar suas preferências e entender como você usa nosso aplicativo. Você pode gerenciar as configurações de cookies no seu navegador.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">8. Crianças</h2>
              <p>
                Nossos serviços não são direcionados a menores de 16 anos. Não coletamos intencionalmente informações pessoais de crianças. Se descobrirmos que coletamos informações de uma criança, tomaremos medidas para excluir essas informações.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">9. Alterações na Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre alterações significativas por e-mail ou através do aplicativo. Recomendamos revisar esta política regularmente.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">10. Contato</h2>
              <p>
                Se tiver dúvidas sobre esta política ou nossas práticas de privacidade, entre em contato conosco pelo e-mail:
              </p>
              <p className="mt-2 font-medium">
                suporte@myvitalitycoach.com
              </p>
            </section>
            
            <section>
              <p className="text-sm text-slate-400">
                Última atualização: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}