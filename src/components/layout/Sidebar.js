import CustomButton from "../CustomButton";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

import Logo from "../../assets/logo.svg";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";
import User from "../../assets/image-avatar.jpg";

const SideBar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="side-bar">
      <div className="side-bar__logo">
        <img src={Logo} alt="Invoice-Manager-Logo" />
      </div>

      <div className="side-bar__toggler">
        <CustomButton
          buttonEvent={toggleTheme}
          userIcon={darkTheme ? Sun : Moon}
        />
      </div>

      <div className="side-bar__user">
        <img src={User} alt="user-profile" />
      </div>
    </aside>
  );
};

export default SideBar;
