import ThemeToggleButton from "./ThemeToggleButton";
import clsx from "clsx";
import { THEME, useTheme } from "../context/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;
  return (
    <nav
      className={clsx(
        "p-4 w-full flex justify-end",
        isLightMode ? "bg-white" : "bg-gray-800"
      )}
    >
      <ThemeToggleButton />
    </nav>
  );
}
