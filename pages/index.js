import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

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
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#333" }}>🚀 My Vitality Coach</h1>

      {!session ? (
        <>
          <p>Por favor, entra com a tua conta Google:</p>
          <button
            onClick={() => signIn("google")}
            style={{
              padding: "10px 20px",
              background: "#111827",
              color: "#fff",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar com Google
          </button>
        </>
      ) : (
        <>
          <img
            src={session.user.image}
            alt="User Avatar"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
          <h2>Olá, {session.user.name} 👋</h2>
          <p>{session.user.email}</p>
          <button
            onClick={() => signOut()}
            style={{
              padding: "10px 20px",
              background: "#e11d48",
              color: "#fff",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        </>
      )}
    </div>
  );
}
