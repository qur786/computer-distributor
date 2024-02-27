import { sendForm } from "@emailjs/browser";

const EmailJS = {
  serviceID: "service_65rhxfl",
  templateID: "template_3r9yy7s",
  publicKey: "7gN_gfh4gzeFqVDUK",
} as const;

export async function sendContactUsMessage(
  htmlElement: string | HTMLFormElement,
): Promise<void> {
  await sendForm(EmailJS.serviceID, EmailJS.templateID, htmlElement, {
    publicKey: EmailJS.publicKey,
  });
}
