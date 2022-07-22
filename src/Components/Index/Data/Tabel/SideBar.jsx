import { RebarIcon } from "../../../Icons/Icons";
import { SideBarDiv } from "./Style";

const SideBar = () => {
  const items = [
    { id: 0, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 1, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 2, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 3, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 4, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 5, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 6, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
    { id: 7, text: "تجهیزات", icon: <RebarIcon size={22} color="#fff" /> },
  ];
  return (
    <SideBarDiv>
      {items.map((item) => {
        return (
          <div className="div" key={item.id}>
            <p className="spanIcon">
              <span>{item.icon}</span>
            </p>
            <span>{item.text} </span>
          </div>
        );
      })}
    </SideBarDiv>
  );
};

export default SideBar;
