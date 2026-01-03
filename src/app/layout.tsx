// app/layout.tsx
import "./globals.css";
import { Barlow_Condensed, Pinyon_Script } from "next/font/google";

export const metadata = {
  title: "Rayan Ahamadi - Creative Developer",
  description: "Creative frontend developer portfolio",
};

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${barlow.variable} ${pinyon.variable} font-primary`}>
      <body className="">
        {children}
      </body>
    </html>
  );
}
