import Link from "next/link";
import { FC, ReactNode } from "react";
import StyledHeaderItems from "./StyledHeaderItems";

export interface HeaderItemsProps {
  items: HeaderItem[];
  isToggled: boolean;
}

export interface HeaderItem {
  name: string;
  path: string;
  Icon: ReactNode;
}

const HeaderItems: FC<HeaderItemsProps> = ({ items, isToggled }) => {
  return (
    <StyledHeaderItems isToggled={isToggled}>
      {items.map(({ path, name, Icon }: HeaderItem) => {
        const myIcon = Icon;
        if (name === "settings") {
          return (
            <li key={name + Math.random()}>
              <Link href={path} className="settings">
                {myIcon}
              </Link>
            </li>
          );
        }
        return (
          <li key={name + Math.random()}>
            <Link href={path}>
              <span className="icon">{myIcon}</span>
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </StyledHeaderItems>
  );
};

export default HeaderItems;
