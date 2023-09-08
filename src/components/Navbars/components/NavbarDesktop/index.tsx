import { NavbarDesktopAnchor } from "./components/NavbarDesktopAnchor";
import { NavbarIcon } from "./components/NavbarIcon";
import { navbarAnchorsInfo } from "../../constants/navbarAnchorsInfo";
import styles from "../styles/Navbar.module.css";

export const NavbarDesktop = () => {
  return (
    <div
      className={`w-full mobile:hidden flex justify-center border-b-2 z-[999] border-indigo-600 dark:border-indigo-950 bg-slate-950 text-gray-400 sticky top-0 dark:dark:bg-slate-950 ${styles.animationNavbar}`}
    >
      <nav className="flex justify-between items-center container h-[100px]">
        <div className="flex items-center gap-2 text-4xl hover:text-white cursor-pointer">
          <NavbarIcon />
          <h2>Cabral</h2>
        </div>

        <ul className="flex mobile:hidden gap-12 text-[18px] dark:text-gray-400 font-bold">
          {navbarAnchorsInfo.map((info, index) => {
            return (
              <NavbarDesktopAnchor
                className="hover:text-gray-100"
                key={info.href}
                href={info.href}
                text={info.label}
                index={index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
