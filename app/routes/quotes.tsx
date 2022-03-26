import { LinksFunction } from "remix";
import { Outlet, Link } from "remix";

import stylesUrl from "~/styles/quotes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function QuotesRoute() {
  
  return (
    <div className="quotes-layout">
      <header className="quotes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Quotes"
              aria-label="Remix Quotes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">QU🤪TES</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="quotes-main">
        <div className="container">
          <div className="quotes-list">
            <Link to=".">Get a random quote</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              <li>
                <Link to="some-quotes-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="quotes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}