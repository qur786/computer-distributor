import { ContactUsForm } from "../../forms/ContactUsForm";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export function ContactUsPage(): JSX.Element {
  return (
    <main className="flex flex-col-reverse md:flex-row gap-12 mt-12">
      <section className="flex w-full flex-col items-center gap-y-6 md:w-1/2">
        <h2 className="text-3xl font-bold text-center">
          We&apos;re here to help you.
        </h2>
        <p className="text-center">
          Have a question, comment, or brilliant idea you&apos;d like to share?
          Send us a little note below - we love to hear from you and will always
          reply!
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <div className="flex flex-col items-center gap-2">
            <PhoneIcon className="h-6 text-sky-600" />
            <p className="font-semibold">Phone Number</p>
            <a className="text-cyan-400 hover:underline" href="tel:07979785099">
              07979785099
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EnvelopeIcon className="h-6 text-gray-400" />
            <p className="font-semibold">Email</p>
            <a
              className="text-cyan-400 hover:underline"
              href="mailto:#"
              target="_blank"
              rel="noopener noreferrer"
            >
              abc@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPinIcon className="h-6 text-red-700" />
            <p className="font-semibold text-center">Location</p>
            <p className="text-center">Post office chaibasa,</p>
            <p className="text-center">Jharkhand 833201 India</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ClockIcon className="h-6 text-blue-700" />
            <p className="font-semibold">Opening Hours</p>
            <p>Monday to Sunday</p>
            <p>10 AM - 8 PM</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.8388857335367!2d85.81020190898926!3d22.547707333800375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e27a42a43427b%3A0x8cbdb3c989d70d2a!2sComputer%20distribution!5e0!3m2!1sen!2sin!4v1700070209595!5m2!1sen!2sin"
          width="600"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>
      <section className="flex w-full flex-col items-center gap-y-6 md:w-1/2">
        <h2 className="text-3xl font-bold text-center">
          Do you want to connect?
        </h2>
        <p className="text-center">Let us know how we can help you?</p>
        <ContactUsForm />
      </section>
    </main>
  );
}
