import { Button } from "../../components/Button";
import type { FormEventHandler } from "react";
import { Input } from "../../components/Input";
import { sendContactUsMessage } from "./send-email";
import { useState } from "react";

export function ContactUsForm(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget; // Needed otherwise the e.currentTarget is getting overrided with null value in async code.
    // TODO: add notification
    sendContactUsMessage("#contact-us-form")
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      className="flex w-full flex-col gap-y-6"
      id="contact-us-form"
      onSubmit={handleSubmit}
    >
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
      <Button type="submit" disabled={loading} loading={loading}>
        Submit
      </Button>
    </form>
  );
}
