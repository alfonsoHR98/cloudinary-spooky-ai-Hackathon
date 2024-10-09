import "./globals.css";
import { Providers } from "@src/app/providers";

export const metadata = {
  title: "Madaroween",
  description: "Aplicación para Hackaton de Cloudinary",
  image: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="w-full min-h-screen m-0 p-0 box-border dark bg-gray-700">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
