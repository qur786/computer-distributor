import AboutImage from "./about-us.svg";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../components/utils";

export function AboutUsPage(): JSX.Element {
  return (
    <main className="flex flex-col gap-6 mt-8">
      <div className="w-full self-center md:w-1/2">
        <img src={AboutImage} alt="About us" />
      </div>
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
      <div className="flex flex-col gap-4">
        <h2 className="text-xl tracking-widest text-gray-500 dark:text-white">
          OUR CUSTOMERS
        </h2>
        {/* TODO: add google review cards */}
      </div>
    </main>
  );
}
