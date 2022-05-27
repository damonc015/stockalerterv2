import classes from "./Iconlist.module.css";
import Icon from "./Icon";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { signOut } from "next-auth/client";

const IconList = () => {
  return (
    <div className={classes.container}>
      <Link href="/">
        <a>
          <Icon symbol={<AiTwotoneHome />} name="Dashboard"></Icon>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Icon symbol={<BsInfoCircleFill />} name="About"></Icon>
        </a>
      </Link>
      <Link href="/news">
        <a>
          <Icon symbol={<ImNewspaper />} name="News"></Icon>
        </a>
      </Link>
      <div className={classes.logout} onClick={() => signOut()}>
        <Icon symbol={<RiLogoutBoxRLine />} name="Logout"></Icon>
      </div>
    </div>
  );
};

export default IconList;
