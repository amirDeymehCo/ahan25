import {
  SideBar,
  HeaderSideBar,
  ListMenu,
  Logout,
  BtnMenu,
  BtnClose,
  Cover,
} from "./AccountLayoutStyles";
import image1 from "./../../components/Index/Main/Question/1.jpg";
import {
  Close,
  LikeFolder,
  Tikt,
  UserNote,
} from "./../../components/Icons/Icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/profileSlice";

const dataMenu = [
  {
    id: 1,
    text: "اطلاعات کاربر",
    icon: <UserNote />,
    href: "/account",
  },
  {
    id: 2,
    text: "علاقه مندی ها",
    icon: <LikeFolder />,
    href: "/account/favorits",
  },
  {
    id: 5,
    text: "سفارش های من",
    icon: <LikeFolder />,
    href: "/account/orders",
  },
  {
    id: 4,
    text: "تیکت ها",
    icon: <Tikt />,
    href: "/account/tickets",
  },
];

const AccountSideBar = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  const { profile } = useSelector((state) => state.profileUser);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <Cover
        onClick={() => setActiveSideBar(false)}
        active={activeSideBar}
      ></Cover>
      <SideBar active={activeSideBar}>
        <BtnMenu
          onClick={() => setActiveSideBar((c) => !c)}
          active={activeSideBar}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </BtnMenu>
        <BtnClose onClick={() => setActiveSideBar(false)}>
          <Close />
        </BtnClose>
        <div className="box">
          <HeaderSideBar>
            <Image width={80} height={80} src={image1} alt="name user" />
            <div>
              {profile.name !== null && <h2>{profile.name}</h2>}
              <span>{profile.phone}</span>
            </div>
          </HeaderSideBar>
          <ListMenu>
            {dataMenu.map((e) => (
              <li key={e.id}>
                <Link href={e.href}>
                  <a>
                    <span>{e.icon}</span>
                    <span>{e.text}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ListMenu>
          <Logout>
            <a>خروج</a>
          </Logout>
        </div>
      </SideBar>
    </>
  );
};

export default AccountSideBar;
