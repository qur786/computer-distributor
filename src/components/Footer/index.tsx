import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { NavLinks } from "../utils";
import { SocialMediaLinks } from "../SocialMediaLinks";
import {
  EnvelopeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export function Footer(): JSX.Element {
  return (
    // TODO: add social media links & fix the alignment in the mobile view
    <footer className="backdrop-blur-md py-2 w-full shadow-top-shadow dark:bg-[#1E1E1E] flex flex-col gap-4">
      <div className="flex flex-col items-center justify-around gap-y-12 p-10 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Contact</h5>
          <address className="not-italic">
            <ul className="flex flex-col items-center md:items-start">
              <li className="flex flex-row items-start gap-2">
                <MapPinIcon className="h-4 text-red-700" />
                Post office Chaibasa,
                <br />
                Jharkhand 833201 India
              </li>
              <li className="flex flex-row items-center gap-2">
                <EnvelopeIcon className="h-4 text-green-900" />
                <a
                  className="text-cyan-400 hover:underline"
                  href="mailto:computterdistributer@gmail.com"
                >
                  computterdistributer@gmail.com
                </a>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PhoneIcon className="h-4" />
                <a
                  className="text-cyan-400 hover:underline"
                  href="tel:+919279395631"
                >
                  9279395631
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Customer Service</h5>
          <p>
            Monday to Sunday
            <br />
            10 AM - 8 PM
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Our Guarantees</h5>
          <p>
            Free returns within 14 days <br />
            Secure payments
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Our Company</h5>
          <div>
            <Link
              to={NavLinks["About Us"]}
              className="text-cyan-400 hover:underline"
            >
              About Us
            </Link>
            <br />
            <Link
              to={NavLinks["Contact Us"]}
              className="text-cyan-400 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="self-center">
        <Logo />
      </div>
      <div className="self-center">
        <SocialMediaLinks />
      </div>
      <div className="text-center">
        &copy; 2023 - Computer Distributor. All rights reserved
      </div>
      <div className="self-center flex flex-row items-center gap-1 md:pr-4">
        Developed with <HeartIcon className="h-4 text-pink-600" /> and Care by
        <a
          href="https://qur786.github.io/portfolio/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-cyan-400 hover:underline"
        >
          Qurban
        </a>
      </div>
      {/* TODO: add google reviews once the website domain is created. */}
    </footer>
  );
}
