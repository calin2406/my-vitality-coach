"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar_url: string | null;
  plan: "free" | "premium";
};

type AuthContextType = {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão atual
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user || null);
        
        if (data.session?.user) {
          // Buscar perfil do usuário
          const { data: profileData, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", data.session.user.id)
            .single();
            
          if (!error && profileData) {
            setProfile({
              id: profileData.id,
              name: profileData.name || data.session.user.user_metadata?.name || "Usuário",
              email: data.session.user.email || "",
              avatar_url: profileData.avatar_url || null,
              plan: profileData.plan || "free",
            });
          } else {
            // Perfil padrão caso não tenha na base de dados
            setProfile({
              id: data.session.user.id,
              name: data.session.user.user_metadata?.name || "Usuário",
              email: data.session.user.email || "",
              avatar_url: null,
              plan: "free",
            });
          }
        }
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Monitorar alterações na autenticação
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      
      if (session?.user) {
        // Buscar perfil do usuário quando mudar o estado de autenticação
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
          
        if (profileData) {
          setProfile({
            id: profileData.id,
            name: profileData.name || session.user.user_metadata?.name || "Usuário",
            email: session.user.email || "",
            avatar_url: profileData.avatar_url || null,
            plan: profileData.plan || "free",
          });
        } else {
          // Perfil padrão
          setProfile({
            id: session.user.id,
            name: session.user.user_metadata?.name || "Usuário",
            email: session.user.email || "",
            avatar_url: null,
            plan: "free",
          });
        }
      } else {
        setProfile(null);
      }
      
      setIsLoading(false);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}