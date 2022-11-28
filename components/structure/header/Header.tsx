import Link from "next/link";
import React from "react";
import StyledHeader from "./StyledHeader";

export default function Header() {
  const links = [
    { name: "About", path: "/about" },
    { name: "Classrooms", path: "/classrooms" },
  ];
  return (
    <StyledHeader>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={Math.random()}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
}
