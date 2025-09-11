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
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
        🚀 My Vitality Coach está no ar!
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#555" }}>
        Se estás a ver isto, o deploy na Vercel funcionou corretamente. 🎉
      </p>
    </div>
  );
}
