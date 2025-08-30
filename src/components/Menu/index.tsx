import { House, Settings, History, SunIcon } from "lucide-react";
import { PageButton } from "../PageButton";
import style from "./styles.module.css";


export function Menu() {
  return (
    <nav className={style.menu}>
      <PageButton ariaLabe="Ir para a Home">
        <House />
      </PageButton>
      <PageButton ariaLabe="Ver histórico">
        <History />
      </PageButton>
      <PageButton ariaLabe="Ir para as configurações">
        <Settings />
      </PageButton>
      <PageButton ariaLabe="Mudar Tema" isTheme={true}>
        <SunIcon />
      </PageButton>
    </nav>
  );
}
