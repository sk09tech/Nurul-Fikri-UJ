export const metadata = {
  title: "Dashboard PM Kerjasama",
  description: "Portal Kelola Bahan Ajar BKB NF Utara Jakarta"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0A0F29", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
