"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiQiita } from "react-icons/si";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 bg-orange-300 px-5 z-10 transition-transform duration-300 flex items-center justify-between text-white ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-4xl">
        <Link href="/">portfolio</Link>
      </div>

      <nav className="flex space-x-8 text-2xl">
        <a
          href="https://x.com/Takaki_inokuchi"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <FaTwitter className="w-8 h-8 hover:text-black" />
        </a>
        <a
          href="https://github.com/takaki-inokuchi"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://qiita.com/takaki-inokuchi"
          target="_blank"
          className="text-green-500 hover:text-green-700 transition"
        >
          <SiQiita className="w-8 h-8" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
