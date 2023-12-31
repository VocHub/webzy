import Link from "next/link";

const Footer = () => (
  <footer className="px-4 py-4 md:py-5 border-t border-slate-700 text-center text-white min-w-full bg-gray-900">
    <p className="text-md md:text-lg lg:text-xl">
      &copy; Copyright 2022 by{" "}
      <Link href="https://github.com/kochan4php">
        <a
          target="_blank"
          className="hover:text-sky-500 transition-colors duration-200"
        >
          Kochan.php
        </a>
      </Link>
    </p>
  </footer>
);

export default Footer;
