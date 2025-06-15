import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, sections, logLinks } from "./elements";

function Navbar() {
  return (
    <nav className="flex justify-between items-center text-white bg-black py-10 px-6">
      <Link href="/">
        <Image
          src="/stockalio-logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="border-4 border-white cursor-pointer"
        />
      </Link>

      <ul className="flex flex-1 items-center space-x-7 border-4 border-white mx-6">
        {sections.map((link:string, index:number) => (
          <li
            key={link}
            className="flex-1 rounded-lg hover:bg-white hover:text-black p-2 text-center"
          >
            <Link href={navLinks[index]}>{link}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-1 justify-end space-x-6">
        {logLinks.map((link:string) => (
          <li
            key={link}
            className="rounded-lg hover:bg-white hover:text-black p-2"
          >
            <Link href={link.toLowerCase()}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
