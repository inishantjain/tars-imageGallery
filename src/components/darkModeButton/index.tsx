import IconMoon from "../../assets/icons/IconMoon";
import IconSun from "../../assets/icons/IconSun";
import { useTheme } from "../../context/themeContext";

const DarkModeButton = () => {
  const { currentTheme, changeCurrentTheme } = useTheme()!;
  return (
    <label className="relative inline-flex cursor-pointer select-none items-center">
      <input type="checkbox" checked={currentTheme === "dark"} onChange={changeCurrentTheme} className="sr-only" />
      <span className="text-sm font-medium text-black dark:text-white hidden lg:inline">Dark Mode</span>
      <div className="shadow-card flex w-[40px] items-center justify-center rounded-md">
        {currentTheme === "dark" ? <IconSun /> : <IconMoon />}
      </div>
    </label>
  );
};

export default DarkModeButton;
