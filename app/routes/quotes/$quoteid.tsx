//import { supabase } from "~/libs/db-server";
import { LoaderFunction, useLoaderData } from "remix";
import { supabaseClient } from "~/utility/supabaseClient";
import { Quote } from "~/models/quote";

export const loader: LoaderFunction = async ({ params }) => {
  const { data } = await supabaseClient
     .from<Quote>("quotes")
     .select("*")
     .eq("id", params.id as string)
     .single();
  

  return data;
}

export default function QuoteRoute() {
  //const quote = useLoaderData<Quote>();
  const quote = useLoaderData<Quote>();

  return (
    <>
      <div>
        <p>Here's your hilarious quote:</p>
        <p>
          Why don't you find hippopotamuses hiding in trees?
          They're really good at it.
        </p>
      </div>  
      <div>
        <p>
          {quote.content}
        </p>
        <p>{quote.name}</p>
      </div>
    </>
  );
}