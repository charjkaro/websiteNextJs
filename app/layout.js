import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Cursor from "@/components/common/Cursor";
import Chat from "@/components/Chatbot/Chat";

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
        <link
          href="https://api.fontshare.com/v2/css?f[]=rajdhani@700,300,400,600,500&f[]=sentient@400,700,200,500,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
        />

        <link
          rel="stylesheet"
          href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
        ></link>
        <meta charSet={metadata.charset} />
      </head>
      <body className={inter.className}>
        <Providers>
          {children} <Cursor color="black" />
        </Providers>
        <div className="fixed bottom-5 right-5">
          <Chat />
        </div>
      </body>
    </html>
  );
}
