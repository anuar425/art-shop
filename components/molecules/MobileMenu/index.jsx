import useModal from "@/Hooks/useModal";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const menuItems = [
  {
    href: "/",
    text: "Work",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/events",
    text: "Events",
  },
  {
    href: "/shop",
    text: "Shop",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

function MobileMenu({ showMenu, closeMenu }) {
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const closeMobileMenu = (event) => {
    closeMenu();
    event.preventDefault();
  };

  const handleClickLink = (link) => {
    closeMenu();
    router.push(link);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {showMenu ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
              className="mobile-menu"
            >
              <div className="mobile-menu-container d-flex flex-column justify-content-center w-100 h-100 text-center gap-5 position-relative">
                {menuItems.map((item, key) => (
                  <>
                    <div
                      className="mobile-menu-item"
                      key={`mobile-menu-${key}`}
                    >
                      <a
                        className="mobile-menu-item-link text-decoration-none text-dark fs-1 fw-bold"
                        onClick={() => handleClickLink(item.href)}
                      >
                        {item.text}
                      </a>
                    </div>
                  </>
                ))}
                <div
                  className="mobile-menu-close-button position-absolute fs-1 fw-bold"
                  onClick={closeMobileMenu}
                >
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </LazyMotion>,
      document.getElementById("__next")
    );
  } else {
    return null;
  }
}

export default MobileMenu;
