import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

export function Footer(): JSX.Element {
  return (
    // TODO: add social media links & fix the alignment in the mobile view
    <footer className="backdrop-blur-md py-2 w-full shadow-top-shadow dark:bg-gray-800">
      <div className="flex flex-col items-center justify-around gap-y-12 p-10 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Contact</h5>
          <address className="not-italic">
            <ul className="flex flex-col items-center md:items-start">
              <li className="flex flex-row items-start gap-2">
                <MapPinIcon className="h-4" />
                Post office chaibasa Chaibasa,
                <br />
                Jharkhand 833201 India
              </li>
              <li className="flex flex-row items-center gap-2">
                <EnvelopeIcon className="h-4" />
                <a
                  className="text-cyan-400 hover:underline"
                  href="mailto:#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  abc@gmail.com
                </a>
              </li>
              <li className="flex flex-row items-center gap-2">
                <PhoneIcon className="h-4" />
                <a
                  className="text-cyan-400 hover:underline"
                  href="tel:07979785099"
                >
                  07979785099
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
            Shipping in 3 days <br />
            Free returns within 14 days <br />
            Secure payments
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-xl font-bold">Our Company</h5>
          <p>
            Delivery <br />
            Legal Notice <br />
            About Us <br />
            Contact Us <br />
            Terms and conditions of use
          </p>
        </div>
      </div>
      <div className="text-center">
        &copy; 2023 - Computer Distributor. All rights reserved
      </div>
    </footer>
  );
}
