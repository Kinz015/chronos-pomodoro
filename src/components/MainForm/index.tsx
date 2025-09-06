import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaltButton } from "../DefaultButton";
import { DefaltInput } from "../DefaultInput";
import styles from "./styles.module.css";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }

  const frase = "Próximo intervalo é de 25min";

  if (frase)
    return (
      <form onSubmit={handleCreateNewTask} className={styles.form} action="">
        <div className={styles.formRow}>
          <DefaltInput
            type="text"
            id="input"
            labelText={"task"}
            placeholder="Digite algo"
            ref={taskNameInput}
            disabled={!!state.activeTask}
          ></DefaltInput>
        </div>

        <div className="formRow">
          <p>{frase}</p>
        </div>

        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}

        <div className="formRow">
          {!state.activeTask && (
            <DefaltButton
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type="submit"
              icon={<PlayCircleIcon />}
              color="green"
              key="botao_submit"
            />
          )}
          {!!state.activeTask && (
            <DefaltButton
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              type="button"
              icon={<StopCircleIcon />}
              color="red"
              onClick={handleInterruptTask}
              key="botao_button"
            />
          )}
        </div>
      </form>
    );
}
