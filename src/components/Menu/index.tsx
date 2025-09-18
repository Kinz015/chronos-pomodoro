import { House, Settings, History, SunIcon } from "lucide-react";
import { PageButton } from "../PageButton";
import style from "./styles.module.css";


export function Menu() {
  return (
    <nav className={style.menu}>
      <PageButton href="/" ariaLabe="Ir para a Home">
        <House />
      </PageButton>
      <PageButton href="/history" ariaLabe="Ver histórico">
        <History />
      </PageButton>
      <PageButton href="/settings" ariaLabe="Ir para as configurações">
        <Settings />
      </PageButton>
      <PageButton href="#" ariaLabe="Mudar Tema" isTheme={true}>
        <SunIcon />
      </PageButton>
    </nav>
  );
}
