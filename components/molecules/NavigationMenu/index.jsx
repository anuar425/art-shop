import Link from "next/link";
import React from "react";
import { navMenuItemHover } from "@/components/motion";
import { motion } from "framer-motion";

const navMenuLinks = [
  { href: "/", name: "Work" },
  { href: "/about", name: "About" },
  { href: "/events", name: "Events" },
  { href: "/shop", name: "Shop" },
  { href: "/contact", name: "Contact" },
  { href: "/articles", name: "Articles" },
];

function NavigationMenu({ navbarClassName = "navbar-nav gap-4 h-100" }) {
  return (
    <>
      <ul className={navbarClassName}>
        {navMenuLinks.map((item, id) => (
          <React.Fragment key={id}>
            <li className="nav-item">
              <Link href={item.href}>
                <a className="nav-menu-link nav-link px-3">{item.name}</a>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default NavigationMenu;
