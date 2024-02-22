import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cash ur Drive",
  description:
    "We are experts in crafting dynamic and engaging outdoor advertising solutions that ensure your brand stands out.",
  // The name of the author of the website
  keywords: ["Outdoor Advertising", "Brand Marketing", "Dynamic Advertising"], // Relevant keywords for SEO

  charset: "UTF-8", // Character encoding for the website
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/x-icon" href="app\logo.ico"></link>
        <meta name="keywords" content={metadata.keywords.join(", ")} />

        <meta charSet={metadata.charset} />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
