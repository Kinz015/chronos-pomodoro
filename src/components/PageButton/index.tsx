import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router";

type Icons = {
  children: React.ReactNode;
  ariaLabe: string;
  isTheme?: boolean;
  href: string;
};

type AvailabelThemes = "dark" | "light";

export function PageButton({ href, isTheme, ariaLabe, children }: Icons ) {
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
    <Link
      className={styles.menuLink}
      to={href}
      aria-label={ariaLabe}
      onClick={isTheme ? mudarThema : undefined}
    >
      { isTheme ? nextThemeIcon[theme] : children }
    </Link>
  );
}
