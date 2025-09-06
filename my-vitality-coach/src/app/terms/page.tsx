"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
          
          <div className="space-y-6 text-slate-200">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou usar o aplicativo My Vitality Coach, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não deverá usar nosso aplicativo ou serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">2. Descrição do Serviço</h2>
              <p>
                O My Vitality Coach é um aplicativo que oferece planos personalizados de nutrição, treino e bem-estar. Nossos serviços incluem, mas não se limitam a:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Planos personalizados de emagrecimento</li>
                <li>Rotinas de skincare</li>
                <li>Recomendações de lifestyle e bem-estar</li>
                <li>Acompanhamento de progresso</li>
                <li>Conteúdo educacional sobre saúde e fitness</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">3. Contas de Usuário</h2>
              <p>
                Para utilizar completamente nossos serviços, você precisará criar uma conta. Você é responsável por manter a confidencialidade da sua senha e por todas as atividades que ocorrem em sua conta.
              </p>
              <p className="mt-2">
                Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado da sua conta ou qualquer outra violação de segurança.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">4. Pagamentos e Assinaturas</h2>
              <p>
                Alguns recursos do My Vitality Coach requerem uma assinatura premium. Os detalhes dos preços estão disponíveis no aplicativo. Ao assinar um plano pago, você concorda com os seguintes termos:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>A assinatura será renovada automaticamente, a menos que seja cancelada pelo menos 24 horas antes do final do período atual</li>
                <li>Taxas de assinatura serão cobradas através da sua conta de loja de aplicativos (Google Play ou App Store)</li>
                <li>Você pode gerenciar suas assinaturas e cancelá-las através das configurações da sua loja de aplicativos</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">5. Isenção de Responsabilidade Médica</h2>
              <p>
                O conteúdo fornecido pelo My Vitality Coach é apenas para fins informativos e educacionais. Não é destinado a substituir aconselhamento, diagnóstico ou tratamento médico profissional.
              </p>
              <p className="mt-2">
                Sempre consulte um médico ou outro profissional de saúde qualificado antes de iniciar qualquer programa de nutrição, exercício físico ou se tiver dúvidas sobre uma condição médica.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">6. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo incluído no aplicativo, como texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do My Vitality Coach ou de seus fornecedores de conteúdo e está protegido por leis internacionais de direitos autorais.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">7. Conduta do Usuário</h2>
              <p>
                Você concorda em não utilizar o aplicativo para:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Violar leis ou regulamentos aplicáveis</li>
                <li>Infringir nossos direitos ou os direitos de terceiros</li>
                <li>Interferir ou interromper o funcionamento do aplicativo</li>
                <li>Enviar conteúdo abusivo, obsceno ou difamatório</li>
                <li>Distribuir malware ou realizar atividades prejudiciais</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">8. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância o My Vitality Coach, seus diretores, funcionários ou agentes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">9. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos atualizados. O uso contínuo do aplicativo após tais alterações constitui sua aceitação dos novos termos.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">10. Lei Aplicável</h2>
              <p>
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis de Portugal, sem consideração aos seus princípios de conflito de leis.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-white">11. Contato</h2>
              <p>
                Se tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail:
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