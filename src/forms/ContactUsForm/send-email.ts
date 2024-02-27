import { sendForm } from "@emailjs/browser";

const EmailJS = {
  serviceID: "service_65rhxfl",
  templateID: "template_3r9yy7s",
  publicKey: "7gN_gfh4gzeFqVDUK",
} as const;

export async function sendContactUsMessage(
  formElement: HTMLFormElement,
): Promise<void> {
  await sendForm(EmailJS.serviceID, EmailJS.templateID, formElement, {
    publicKey: EmailJS.publicKey,
  });
}
