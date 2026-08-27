import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}