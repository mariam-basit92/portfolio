import type { Metadata } from "next";
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const quickSand = Quicksand({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-quick-sand',
  subsets: ["latin"] 
});

const playFairDisplay = Playfair_Display({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair-display',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Mariam's Portfolio",
  description: "Automation Engineer, Tech Enthusiast, and a Software Developer",
};

const navLinks = [
  { id: 0, href: "/", label: "Home" },
  { id: 1, href: "/about", label: "About" },
  { id: 2, href: "/education", label: "Education" },
  { id: 3, href: "/experience", label: "Experience" },
  { id: 4, href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} ${playFairDisplay.className}`}>
        <main className="flex relative h-screen items-start h-full mx-auto my-0 max-w-screen-xl">
          <aside className="flex flex-col items-center justify-start min-w-80 min-h-full px-1 py-10 flex-grow space-y-2 font-mono bg-gray-800">
            <Image
              src="/portfolio/profile.jpg"
              alt="Mariam Basit"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 object-cover"
            />
            <h1 className="text-xl font-bold">Mariam Basit</h1>
            <p className="text-xs"><span className="text-blue-600">QA/Automation engineer</span> in Germany</p>
            <div>
              <ul className="flex flex-col items-center justify-center w-full h-full p-4 text-center space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="text-xs hover:text-blue-500 hover:underline underline-offset-8 capitalize" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        <div className="min-h-full bg-white py-10 px-4 dark:text-black">
          {children}
        </div>
        </main>
      </body>
    </html>
  );
}
