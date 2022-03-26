import type { LinksFunction } from "remix";
import { Link } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Quotes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="quotes">Read Quotes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


