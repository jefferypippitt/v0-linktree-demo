import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linktree Demo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className='scroll-smooth antialiased'
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col ${inter.className}`}>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
        >
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
