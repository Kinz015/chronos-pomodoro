import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Icons = {
  children: React.ReactNode;
  ariaLabe: string;
  isTheme?: boolean;
};

type AvailabelThemes = "dark" | "light";

export function PageButton({ isTheme, ariaLabe, children }: Icons) {
  const [theme, setTheme] = useState<AvailabelThemes>("dark");

  function mudarThema(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    ev.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("Tema atual:", theme);

  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <a
      className={styles.menuLink}
      href="#"
      aria-label={ariaLabe}
      onClick={isTheme ? mudarThema : undefined}
    >
      {children}
    </a>
  );
}
