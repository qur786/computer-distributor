import { Input } from "../../components/Input";

export function ContactUsForm(): JSX.Element {
  return (
    <form className="flex w-full flex-col gap-y-6">
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Enter name"
        required
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Enter email ID"
        required
      />
      <Input
        name="message"
        label="Message"
        placeholder="Type your message"
        textArea={{ rows: 6 }}
        required
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-black p-2 text-white hover:border-2 hover:bg-white hover:text-black"
      >
        Submit
      </button>
    </form>
  );
}
