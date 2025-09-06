"use client";

import { useAuth } from "@/contexts/auth-context";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Crown, ArrowLeft, Settings, Bell, CreditCard, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";

export default function PerfilPage() {
  const { profile, isLoading } = useAuth();
  const [name, setName] = useState(profile?.name || "");
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!profile) {
    router.push("/auth");
    return null;
  }

  const handleSave = async () => {
    setIsSaving(true);
    // Simulação de salvar (implementar com Supabase)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar ao Início</span>
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
                      <Crown className="h-3 w-3 mr-1" /> Premium
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
                    className="flex items-center gap-2 text-slate-200 hover:text-white p-2 rounded-md bg-white/10"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Perfil</span>
                  </Link>
                  <Link 
                    href="/perfil/notificacoes" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5"
                  >
                    <Bell className="h-4 w-4" />
                    <span>Notificações</span>
                    <Badge variant="secondary" className="ml-auto">2</Badge>
                  </Link>
                  <Link 
                    href="/perfil/pagamentos" 
                    className="flex items-center gap-2 text-slate-300 hover:text-white p-2 rounded-md hover:bg-white/5"
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
                <CardTitle className="text-white">Definições de Perfil</CardTitle>
                <CardDescription className="text-slate-300">
                  Gerencie suas informações pessoais e preferências
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="info">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="info">Informações</TabsTrigger>
                    <TabsTrigger value="password">Palavra-passe</TabsTrigger>
                    <TabsTrigger value="preferences">Preferências</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="info" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nome completo</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input 
                        id="email" 
                        value={profile.email} 
                        disabled 
                        className="bg-white/10 border-white/20 text-white opacity-70"
                      />
                      <p className="text-xs text-slate-400">Para alterar o email, é necessário verificação.</p>
                    </div>
                    
                    <Button 
                      onClick={handleSave} 
                      disabled={isSaving} 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white mt-4"
                    >
                      {isSaving ? "Salvando..." : "Salvar alterações"}
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="password" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-white">Palavra-passe atual</Label>
                      <Input 
                        id="current-password" 
                        type="password" 
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-white">Nova palavra-passe</Label>
                      <Input 
                        id="new-password" 
                        type="password" 
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-white">Confirmar nova palavra-passe</Label>
                      <Input 
                        id="confirm-password" 
                        type="password" 
                        className="bg-white/10 border-white/20 text-white"
                      />
                    </div>
                    
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white mt-4">
                      Atualizar palavra-passe
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="preferences" className="space-y-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Notificações</h3>
                      <div className="grid gap-2">
                        {["Email", "Push", "SMS"].map((type) => (
                          <div key={type} className="flex items-center gap-2">
                            <input 
                              type="checkbox" 
                              id={`notify-${type}`} 
                              className="rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                            />
                            <Label htmlFor={`notify-${type}`} className="text-white">{type}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Idioma</h3>
                      <div className="grid gap-2">
                        <select className="bg-white/10 border-white/20 text-white rounded-md p-2">
                          <option value="pt">Português</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white mt-4">
                      Salvar preferências
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}