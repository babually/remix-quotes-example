import { supabaseClient } from "~/utility/supabaseClient";
import { LoaderFunction, useLoaderData } from "remix";
import { Quote } from "~/models/quote";

export const loader: LoaderFunction = async () => {
  const { data: quotes } = await supabaseClient
    .from<Quote>("quotes")
    .select("id, name, content");
  return quotes;
};

export default function QuotesIndexRoute() {
  const quotes = useLoaderData<Quote[]>();
  return (
    <div>
      <p>Here's a random Quotes:</p>
      <div className="quotes-block">
        <blockquote>
          When I wrote this code, only God and I understood what I did. Now only God knows.”I was wondering why the frisbee was getting bigger,
          then it hit me.
        </blockquote>
        <cite> Aldous Huxley </cite>
      </div>

      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>
            <div className="quote-block">
              <blockquote>
                {quote.content}
              </blockquote>
              <cite>{quote.name}</cite>
            </div>
          </li>
        ))}
      </ul>

     
      
    </div>
  );
}