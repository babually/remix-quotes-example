import { Form, ActionFunction } from 'remix';
import { supabaseClient } from "~/utility/supabaseClient";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const newQuote = {
    name: formData.get("name"),
    content: formData.get("content")
  };

  const { data } = await supabaseClient.from("quotes").insert([newQuote]);

  return data;
}

export default function NewQuoteRoute() {
  return (
    <div>
      <p>Add your own hilarious Quote</p>
      <Form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea rows={3} name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </Form>
    </div>
  );
}