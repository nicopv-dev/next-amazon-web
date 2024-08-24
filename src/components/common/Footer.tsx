import logo from "@/assets/images/amazon_logo.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Get to Know Us",
    items: [
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "About Amazon",
        href: "#",
      },
      {
        name: "Investor Relations",
        href: "#",
      },
      {
        name: "Amazon Devices",
        href: "#",
      },
      {
        name: "Amazon Tours",
        href: "#",
      },
    ],
  },
  {
    title: "Make Money with Us",
    items: [
      {
        name: "Make Money with Us",
        href: "#",
      },
      {
        name: "Sell products on Amazon",
        href: "#",
      },
    ],
  },
  {
    title: "Amazon Payment Methods",
    items: [
      {
        name: "Amazon Rewards Visa Signature Cards",
        href: "#",
      },
      {
        name: "Amazon.com Store Card",
        href: "#",
      },
      {
        name: "Amazon Money Store",
        href: "#",
      },
    ],
  },
  {
    title: "Let Us Help You",
    items: [
      {
        name: "Track Packages",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-text py-10 mt-10">
      <div className="container grid grid-cols-5">
        <div className="pt-2">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>

        {links.map((link, index) => (
          <div key={index} className="space-y-3">
            <Link href={"#"} className="text-white text-sm font-semibold">
              {link.title}
            </Link>
            <ul>
              {link.items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs font-light text-white/50"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
