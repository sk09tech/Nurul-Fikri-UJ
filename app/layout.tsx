import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "NF UJ System",
  description: "Admin Dashboard NF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
