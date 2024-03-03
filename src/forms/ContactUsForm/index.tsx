import { Button } from "../../components/Button";
import type { FormEventHandler } from "react";
import { Input } from "../../components/Input";
import { Notification } from "../../components/Notification";
import { sendContactUsMessage } from "./send-email";
import type {
  NotificationProps,
  NotificationRef,
} from "../../components/Notification";
import { useRef, useState } from "react";

export function ContactUsForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationProps>({
    title: "",
  });

  const notificationRef = useRef<NotificationRef>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget; // Needed otherwise the e.currentTarget is getting overrided with null value in async code.
    // TODO: add notification
    sendContactUsMessage("#contact-us-form")
      .then(() => {
        form.reset();
        setNotification((prev) => ({
          ...prev,
          title: "Your response has successfully been sent.",
          variant: "success",
        }));
        notificationRef.current?.displayNotification();
      })
      .catch(() => {
        setNotification((prev) => ({
          ...prev,
          title: "Error while sending your response.",
          variant: "error",
        }));
        notificationRef.current?.displayNotification();
      })
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
      <Notification {...notification} ref={notificationRef} />
    </form>
  );
}
