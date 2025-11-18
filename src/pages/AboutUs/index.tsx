import AboutImage from "./about-us.svg";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../components/utils";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export function AboutUsPage(): JSX.Element {
  return (
    <main className="flex flex-col gap-6 mt-12">
      <img
        src={AboutImage}
        alt="About us"
        className="h-[50vh] object-contain self-center"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          ABOUT US
        </h2>
        <p>
          Having built up a very solid and stable reputation for our quality
          products and services over the last 10 years, the{" "}
          <b>Computer Distributor</b> is the perfect choice, as we offer
          unrivalled expertise for all your IT Solutions and we are proud to
          have assisted thousands of customers since opening our first store
          back in January 2010.
        </p>
        <p>
          In 2010, we formed a dedicated business team delivering customized
          solutions across West Singhbhum. So, whether you&apos;re a home user
          or a shop owner, we take the time to understand you and your
          requirements, thus helping you achieve your objectives through the
          provision of IT.
        </p>
        <p>
          In our stores you will find an array of hardware, software and all
          associated peripherals to fulfil your needs, backed up by friendly,
          helpful and expert staff. Our store have a technical repair workshop
          where we carry out thousands of repairs each year.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          CUSTOMER SERVICE
        </h2>
        <p>
          If there&apos;s anything you need at all we are here to help. You can
          contact us by{" "}
          <NavLink
            to={NavLinks["Contact Us"]}
            className="text-cyan-400 hover:underline"
          >
            telephone or email
          </NavLink>
          , use the contact form or come visit one of our stores and one of our
          friendly team members will be happy to help you.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          REPAIRS
        </h2>
        <p>
          Our trained engineers can fix any PC, laptop, Apple and more. Computer
          tune ups, Virus removal and data recovery services available.{" "}
          <NavLink
            to={NavLinks["Contact Us"]}
            className="block text-cyan-400 hover:underline"
          >
            Book a repair online.
          </NavLink>
        </p>
      </div>
      {/* <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          OUR CUSTOMERS
        </h2> */}
      {/* TODO: add google review cards */}
      {/* </div> */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          Contact us
        </h2>
        <p className="text-left">
          Have a question, comment, or brilliant idea you&apos;d like to share?
          Send us a little note below - we love to hear from you and will always
          reply!
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <div className="flex flex-col items-center gap-2">
            <PhoneIcon className="h-6 text-sky-600" />
            <p className="font-semibold">Phone Number</p>
            <a
              className="text-cyan-400 hover:underline"
              href="tel:+919279395631"
            >
              9279395631
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EnvelopeIcon className="h-6 text-gray-400" />
            <p className="font-semibold">Email</p>
            <a
              className="text-cyan-400 hover:underline"
              href="mailto:computerdistributer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              computerdistributer@gmail.com
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
      </div>
    </main>
  );
}
