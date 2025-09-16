import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./app.css";

export function meta() {
  return [
    { title: "JT Muse'25" },
    {
      name: "description",
      content: "The third edition of Lgs Jt's Premier Art Olympiad",
    },
  ];
}

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        {/* Preload priority for background images and use webp for faster loading times*/}
        <link rel="preload" as="image" href="/assets/images/bg.webp" imageSrcSet="/assets/images/bg.webp 1x, /assets/images/bg-mobile.png 800w" imageSizes="(max-width: 800px) 100vw, 100vw" type="image/webp" />
        <link rel="preload" as="image" href="/assets/images/bg-mobile.png" imageSrcSet="/assets/images/bg-mobile.png 800w" imageSizes="(max-width: 800px) 100vw, 100vw" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Global background layer with responsive images */}
        <picture>
          <source
            srcSet="/assets/images/bg.webp"
            type="image/webp"
            media="(min-width: 801px)"
          />
          <source
            srcSet="/assets/images/bg-mobile.png"
            type="image/png"
            media="(max-width: 800px)"
          />
          <img
            src="/assets/images/bg-mobile.png"
            alt="Background"
            className="fixed inset-0 w-full min-h-screen bg-img-stable object-cover object-center bg-muted -z-10 select-none pointer-events-none"
            style={{ position: "fixed", inset: 0, zIndex: -1, height: '100dvh', minHeight: '100vh' }}
            loading="eager"
            fetchPriority="high"
            draggable="false"
            aria-hidden="true"
          />
        </picture>
  {/* <Navbar /> */}
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
