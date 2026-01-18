import "./globals.css";
import Providers from "./_components/Providers";
import ScrollToTop from "./_components/ScrollToTop";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = { title: {
    default: "Mania",
    template: "%s · Mania",
  }, description: "Premium Watch Store" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollToTop />
          <Navbar />
          <main className="min-h-[calc(100vh-140px)]">{children}</main>
          <Footer />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
