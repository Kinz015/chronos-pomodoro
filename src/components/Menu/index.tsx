import { House, Settings, History, SunIcon } from "lucide-react";
import { PageButton } from "../PageButton";
import style from "./styles.module.css"

export function Menu() {
  return (
    <nav className={style.menu}>
      <PageButton>
        <House />
      </PageButton>
      <PageButton>
        <History />
      </PageButton>
      <PageButton>
        <Settings />
      </PageButton>
      <PageButton>
        <SunIcon />
      </PageButton>
    </nav>
  );
}
