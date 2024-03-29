import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { SearchProvider } from "./context/context";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio-Rescata",
  description: "Landing Page sobre proyecto social en la ciudad de Cucuta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>

        <SearchProvider>
          <Providers>
            {children}
          </Providers>
        </SearchProvider>
      </body>
    </html>
  );
}
