"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>Dashboard PM Kerjasama</h1>
      <button
        style={{
          marginTop: 20,
          padding: "12px 24px",
          background: "#0070f3",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          color: "white"
        }}
        onClick={() => router.push("/dashboard")}
      >
        Masuk Dashboard
      </button>
    </div>
  );
}
