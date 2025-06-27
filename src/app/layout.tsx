// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Proof Jobs",
  description:
    "Explore 12 jobs that are resilient to AI and automation in the next decade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              AI-Proof Careers
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    The Jobs
                  </Link>
                </li>
                {/* Add more nav links if you create more pages */}
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-12">
          <div className="container mx-auto">
            <p>
              &copy; {new Date().getFullYear()} Arfan Zulfahmi. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
