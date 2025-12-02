import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How AI Will Change Investment Banking Careers",
  description:
    "Single-page slide deck on how AI will reshape junior investment banking roles over the next decade."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}


