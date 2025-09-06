"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, CreditCard, Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { UserAvatar } from "@/components/user-avatar";

// Dados de exemplo para faturas
const INVOICES = [
  {
    id: "INV-001",
    date: "2023-06-01",
    amount: "4.90",
    status: "paid",
    plan: "premium",
    period: "01/06/2023 - 30/06/2023"
  },
  {
    id: "INV-002",
    date: "2023-07-01",
    amount: "4.90",
    status: "paid",
    plan: "premium",
    period: "01/07/2023 - 31/07/2023"
  },
  {
    id: "INV-003",
    date: "2023-08-01",
    amount: "4.90",
    status: "paid",
    plan: "premium",
    period: "01/08/2023 - 31/08/2023"
  }
];

export default function PagamentosPage() {
  const { profile, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!profile) {
    router.push("/auth");
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-PT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(date);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/perfil" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar ao Perfil</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center pb-4">
                <div className="flex flex-col items-center">
                  <UserAvatar src={profile.avatar_url} name={profile.name} size="lg" />
                  <CardTitle className="mt-3 text-white">{profile.name}</CardTitle>
                  <CardDescription className="text-slate-300">{profile.email}</CardDescription>
                  
                  {profile.plan === "premium" ? (
                    <Badge className="mt-2 bg-gradient-to-r from-yellow-400 to-amber-600 text-white">
                      Premium
                    </Badge>
                  ) : (
                    <Link href="/premium">
                      <Button className="mt-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-xs px-3 py-1 h-auto">
                        Upgrade para Premium
                      </Button>
                    </Link>
                  )}
                </div>
              </CardHeader>
              <CardContent className="border-t border-white/10 pt-4">
                <nav className="space-y-2">
                  <Link 
                    href="/perfil" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                  <Link 
                    href="/perfil/notificacoes" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Notificações</span>
                    <Badge variant="secondary" className="ml-auto">2</Badge>
                  </Link>
                  <Link 
                    href="/perfil/pagamentos" 
                    className="flex items-center gap-2 text-slate-200 hover:text-white p-2 rounded-md bg-white/10"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Pagamentos</span>
                  </Link>
                  <Link 
                    href="/perfil/historico" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Histórico</span>
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Histórico de Pagamentos</CardTitle>
                <CardDescription className="text-slate-300">
                  Veja suas faturas e pagamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {profile.plan === "premium" ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-white">Plano Premium Ativo</h3>
                          <p className="text-slate-300 text-sm">Próxima cobrança em 01/09/2023</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Alterar Plano
                          </Button>
                          <Button variant="outline" className="text-red-400 border-red-400/20 hover:bg-red-400/10">
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/20 overflow-hidden">
                      <table className="min-w-full divide-y divide-white/10">
                        <thead className="bg-white/5">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                              Referência
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                              Data
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                              Período
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                              Valor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                              
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-white">
                          {INVOICES.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-white/5">
                              <td className="px-6 py-4 whitespace-nowrap text-sm">{invoice.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">{formatDate(invoice.date)}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">{invoice.period}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">{invoice.amount}€</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30">
                                  Pago
                                </Badge>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="h-4 w-4 text-slate-300" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <CreditCard className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                    <h3 className="text-white text-lg font-medium mb-2">Sem histórico de pagamentos</h3>
                    <p className="text-slate-300 mb-6">
                      Você está utilizando o plano gratuito. Faça upgrade para Premium para acessar mais recursos.
                    </p>
                    <Link href="/premium">
                      <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                        Ver Plano Premium
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}