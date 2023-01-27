import Link from "next/link";
import { useState } from "react";

import HeaderItems from "./HeaderItems";
import StyledHeader from "./StyledHeader";
import Image from "next/image";

import { FaDoorOpen, FaSeedling, FaTree } from "react-icons/fa";
// import { GrMoney } from "react-icons/gr";
import { IoIosBook, IoMdSettings } from "react-icons/io";
import { BsPiggyBankFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const iconSize = "1em";
  const links = [
    {
      name: "billing",
      path: "/billing",
      Icon: <BsPiggyBankFill size={iconSize} />,
    },
    {
      name: "subjects",
      path: "/subjects",
      Icon: <IoIosBook size={iconSize} />,
    },

    {
      name: "students",
      path: "/students",
      Icon: <FaSeedling size={iconSize} />,
    },
    {
      name: "teachers",
      path: "/teachers",
      Icon: <FaTree size={iconSize} />,
    },
    {
      name: "classes",
      path: "/classrooms",
      Icon: <FaDoorOpen size={iconSize} />,
    },
    {
      name: "courses",
      path: "/courses",
      Icon: <ImBooks size={iconSize} />,
    },
    {
      name: "settings",
      path: "/settings",
      Icon: <IoMdSettings size={iconSize} />,
    },
  ];

  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <StyledHeader>
      <Link href="/" className="logo">
        <h1>School Name</h1>
        {/* <Image
          src="/images/school-logo.png"
          width={80}
          height={80}
          alt="school logo"
        /> */}
      </Link>
      <nav>
        {!toggle ? (
          <AiOutlineMenu
            size="35px"
            className="menu-button"
            onClick={menuToggle}
          />
        ) : (
          <AiOutlineClose
            size="35px"
            className="menu-button"
            onClick={menuToggle}
          />
        )}

        <HeaderItems items={links} isToggled={toggle} />
      </nav>
    </StyledHeader>
  );
}
