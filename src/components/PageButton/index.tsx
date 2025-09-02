import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MoonIcon, SunIcon } from "lucide-react";

type Icons = {
  children: React.ReactNode;
  ariaLabe: string;
  isTheme?: boolean;
};

type AvailabelThemes = "dark" | "light";

export function PageButton({ isTheme, ariaLabe, children }: Icons) {
  const [theme, setTheme] = useState<AvailabelThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailabelThemes || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  function mudarThema(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    ev.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <a
      className={styles.menuLink}
      href="#"
      aria-label={ariaLabe}
      onClick={isTheme ? mudarThema : undefined}
    >
      { isTheme ? nextThemeIcon[theme] : children }
    </a>
  );
}
