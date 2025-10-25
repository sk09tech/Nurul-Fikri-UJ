
import "../styles/globals.css";
export const metadata = {
  title: "DASHBOARD PM KERJASAMA",
  description: "Portal Kelola Bahan Ajar - Nurul Fikri"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
