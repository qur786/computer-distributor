import { Input } from "../../components/Input";
import { sendContactUsMessage } from "./send-email";
import { useRef, useState } from "react";

export function ContactUsForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  return (
    <form className="flex w-full flex-col gap-y-6" ref={form}>
      <Input
        type="text"
        name="from_name" // Same as template name
        label="Name"
        placeholder="Enter name"
        required
      />
      <Input
        type="email"
        name="from_email" // Same as template name
        label="Email"
        placeholder="Enter email ID"
        required
      />
      <Input
        name="message" // Same as template name
        label="Message"
        placeholder="Type your message"
        textArea={{ rows: 6 }}
        required
      />
      {/* Same as template name */}
      <input type="hidden" name="to_name" value="Vishal" />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          // TODO: add notification
          if (form.current !== null) {
            sendContactUsMessage(form.current)
              .then((res) => {
                console.log(res);
                form.current?.reset();
              })
              .catch(console.log)
              .finally(() => {
                setLoading(false);
              });
          }
        }}
        disabled={loading}
        className="w-full rounded-xl bg-black p-2 text-white hover:border-2 hover:bg-white hover:text-black disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
