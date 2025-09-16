import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        if (d?.user) setUser(d.user);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={wrap}>
        <h1 style={title}>🚀 My Vitality Coach</h1>
        <p>A carregar…</p>
      </div>
    );
  }

  if (user) {
    return (
      <div style={wrap}>
        <h1 style={title}>🚀 My Vitality Coach</h1>
        {user.image && (
          <img
            src={user.image}
            alt="Avatar"
            width="80"
            height="80"
            style={{ borderRadius: "50%" }}
          />
        )}
        <h2>Olá, {user.name}</h2>
        <p>{user.email}</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <a href="/dashboard" style={secondaryBtn}>Ir para Dashboard</a>
          <a href="/api/auth/signout" style={dangerBtn}>Sair</a>
        </div>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <h1 style={title}>🚀 My Vitality Coach</h1>
      <a href="/api/auth/signin/google" style={primaryBtn}>
        Entrar com Google
      </a>
    </div>
  );
}

const wrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f4f6f8",
  gap: "16px",
};

const title = { fontSize: "2rem", color: "#333" };

const primaryBtn = {
  padding: "10px 20px",
  background: "#111827",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
};

const secondaryBtn = {
  padding: "10px 20px",
  background: "#e0e7ff",
  color: "#1e3a8a",
  borderRadius: 8,
  textDecoration: "none",
};

const dangerBtn = {
  padding: "10px 20px",
  background: "#e11d48",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
};
