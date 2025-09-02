import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaltButton } from "../DefaultButton";
import { DefaltInput } from "../DefaultInput";
import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function MainForm() {

  return (
    <form className={styles.form} action="">
      <div className={styles.formRow}>
        <DefaltInput
          type="text"
          id="input"
          labelText={"task"}
          placeholder="Digite algo"
        ></DefaltInput>
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaltButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
