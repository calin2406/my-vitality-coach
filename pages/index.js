export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        gap: "12px",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", color: "#333" }}>
        🚀 My Vitality Coach está online!
      </h1>

      <a
        href="/api/auth/signin"
        style={{
          padding: "10px 14px",
          background: "#111827",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Entrar com Google
      </a>

      <a
        href="/api/auth/signout"
        style={{ fontSize: "0.95rem", color: "#555" }}
      >
        Sair
      </a>
    </div>
  );
}
