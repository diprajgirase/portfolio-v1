import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Dipraj Girase",
  description:
    "Hi, this Dipraj. Web developer from India building applications that people are using. Building an npm package too.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="text-slate-900 dark:text-slate-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
