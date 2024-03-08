import { FacebookIcon } from "../../icons/facebook";
import { GmailIcon } from "../../icons/gmail";
import { InstagramIcon } from "../../icons/instagram";
import type { MouseEventHandler } from "react";
import { TwitterIcon } from "../../icons/twitter";
import { WhatsappIcon } from "../../icons/whatsapp";

export function SocialMediaLinks(): JSX.Element {
  const handleDisabledLink: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
  };
  return (
    <div className="self-center flex flex-row gap-4">
      <a
        href="#"
        onClick={handleDisabledLink}
        title="Instagram"
        className="hover:cursor-not-allowed"
      >
        <InstagramIcon className="h-5 hover:scale-125 transition-transform" />
      </a>
      <a
        href="https://wa.link/mvezeg"
        target="_blank"
        rel="noopener noreferrer"
        title="Whatsapp"
      >
        <WhatsappIcon className="h-5 fill-[#075E54] hover:scale-125 transition-transform" />
      </a>
      <a
        href="#"
        onClick={handleDisabledLink}
        title="Facebook"
        className="hover:cursor-not-allowed"
      >
        <FacebookIcon className="h-5 hover:scale-125 transition-transform" />
      </a>
      <a
        href="mailto:computterdistributer@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <GmailIcon className="h-5 fill-[#C71610] hover:scale-125 transition-transform" />
      </a>
      <a
        href="#"
        onClick={handleDisabledLink}
        title="X(Twitter)"
        className="hover:cursor-not-allowed"
      >
        <TwitterIcon className="h-5 fill-[#1DA1F2] hover:scale-125 transition-transform" />
      </a>
    </div>
  );
}
