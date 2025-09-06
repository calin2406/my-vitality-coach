"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGoogle() {
    try {
      setLoading(true);
      setMsg(null);
      setError(null);
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      
      if (error) {
        console.error("Erro ao autenticar com Google:", error);
        throw error;
      }
    } catch (err: any) {
      setError(err?.message || "Ocorreu um erro ao autenticar com Google. Verifique se o Supabase está configurado corretamente.");
    } finally {
      setLoading(false);
    }
  }

  async function handleFacebook() {
    setMsg(null);
    setError("Autenticação com Facebook em breve disponível");
  }

  async function handleApple() {
    setMsg(null);
    setError("Autenticação com Apple em breve disponível");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setMsg("Login feito com sucesso!");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        });
        if (error) throw error;
        setMsg("Conta criada! Verifique o seu email.");
      }
    } catch (err: any) {
      setError(err?.message || "Ocorreu um erro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{
      background: 'radial-gradient(1200px 800px at 10% 0%, #1a1f3f 0%, #0f1222 60%)'
    }}>
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" />
          <span>Voltar ao Início</span>
        </Link>
        
        <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              {isLogin ? "Entrar" : "Criar conta"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mensagem de alerta para configuração do Supabase */}
            <div className="mb-6 p-3 bg-amber-500/20 border border-amber-500/30 rounded-md text-amber-200 text-sm flex items-start gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Para que a autenticação funcione, configure o provider OAuth do Google no dashboard do Supabase após conectá-lo ao projeto.</span>
            </div>

            <div className="space-y-3 mb-6">
              <Button 
                onClick={handleGoogle} 
                variant="outline"
                disabled={loading}
                className="w-full bg-white text-slate-800 hover:bg-slate-100 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Continuar com Google
              </Button>
              
              <button 
                onClick={handleFacebook} 
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium rounded-md"
                style={{ backgroundColor: "#1877F2", borderColor: "#1877F2" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="white" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
                Continuar com Facebook
              </button>
              
              <Button 
                onClick={handleApple} 
                variant="outline"
                disabled={loading}
                className="w-full bg-black text-white hover:bg-gray-900 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="white" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M13 3.5c.73-.83 2.07-1.46 3.13-1.5.13 1.09-.35 2.23-.98 3.02-.74.87-1.96 1.5-3.15 1.5-.15-1.09.4-2.23 1-3.02z" />
                </svg>
                Continuar com Apple
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/20"></span>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#1a1f3f] px-2 text-slate-300">ou continue com email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nome</label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">Senha</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              
              <Button 
                disabled={loading} 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-full font-bold"
              >
                {loading ? "Aguarde..." : isLogin ? "Entrar" : "Criar conta"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-300">
              {isLogin ? "Não tem conta?" : "Já tem conta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                {isLogin ? "Criar conta" : "Entrar"}
              </button>
            </div>

            {msg && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-200 text-center">
                {msg}
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-200 text-center">
                {error}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}