import Link from "next/link";
import React from "react";
import StyledHeader from "./StyledHeader";

export default function Header() {
  const links = { name: "About", path: "/about" };
  return (
    <StyledHeader>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <Link href={links.path}>
            <li key={Math.random()}>{links.name}</li>
          </Link>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
