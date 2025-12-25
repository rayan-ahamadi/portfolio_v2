// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Rayan Ahamadi — Creative Developer",
  description: "Creative frontend developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
