import { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindHref from "~/tailwind.css?url";

export function links(): ReturnType<LinksFunction> {
  return [{ rel: "stylesheet", href: tailwindHref }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
