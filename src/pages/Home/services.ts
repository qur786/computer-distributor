import AccessoriesImage from "./accessories.svg";
import BestComputer from "./best-computer.svg";
import BugFix from "./bug-fix.svg";
import CustomPC from "./custom-pc.svg";
import DataRecovery from "./data-recovery.svg";
import HardwareUpgrade from "./hardware-upgrade.svg";
import Network from "./network.svg";
import OnsiteRepair from "./onsite-repair.svg";
import RepairImage from "./repair.svg";
import type { ServiceCardProps } from "../../components/ServiceCard";
import SoftwareInstallation from "./software-installation.svg";

export const Services: ServiceCardProps[] = [
  {
    image: BestComputer,
    imageAlt: "Best Computers",
    title: "Best Computers",
    description:
      "Discover the finest selection of computers and laptops at our shop. From cutting-edge performance to sleek designs, find the perfect device to suit your needs and elevate your computing experience.",
  },
  {
    image: RepairImage,
    imageAlt: "Fast Repair",
    title: "Fast Repair",
    description:
      "Trust our skilled technicians to fix your computer issues promptly and efficiently. Get your device back up and running smoothly with our reliable repair services.",
  },
  {
    image: AccessoriesImage,
    imageAlt: "Accessories",
    title: "Accessories",
    description:
      "Explore our wide range of accessories, including keyboards, mouse, monitors, motherboard, HDD, SSD, printers, hedaphones, and more, to enhance your computing experience.",
  },
  {
    image: OnsiteRepair,
    imageAlt: "On-Site Repairs",
    title: "On-Site Repairs",
    description:
      "Can't make it to our shop? No problem. We offer on-site repair services to conveniently fix your computer issues at your location.",
  },
  {
    image: CustomPC,
    imageAlt: "Custom PC Builds",
    title: "Custom PC Builds",
    description:
      "Let us tailor-make the perfect PC for your needs, whether it's for gaming, professional work, or everyday use.",
  },
  {
    image: BugFix,
    imageAlt: "Virus & Malware Removal",
    title: "Virus & Malware Removal",
    description:
      "Say goodbye to pesky viruses and malware. Our experts will thoroughly clean your system and ensure it's protected against future threats.",
  },
  {
    image: DataRecovery,
    imageAlt: "Data Recovery",
    title: "Data Recovery",
    description:
      "Accidentally deleted important files? Don't panic. We specialize in retrieving lost data from hard drives, SSDs, and other storage devices.",
  },
  {
    image: HardwareUpgrade,
    imageAlt: "Hardware Upgrades",
    title: "Hardware Upgrades",
    description:
      "Boost your computer's performance with our hardware upgrade services. From RAM and graphics cards to storage drives, we'll help you take your system to the next level.",
  },
  {
    image: SoftwareInstallation,
    imageAlt: "Software Installation & Troubleshooting",
    title: "Software Installation & Troubleshooting",
    description:
      "Need help installing or troubleshooting software? Our knowledgeable team is here to assist with all your software needs.",
  },
  {
    image: Network,
    imageAlt: "Networking Solutions",
    title: "Networking Solutions",
    description:
      "Whether you're setting up a home network or optimizing your office's infrastructure, we offer comprehensive networking solutions to keep you connected.",
  },
];
