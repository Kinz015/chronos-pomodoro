import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/mainTemplate";
import { DefaultButton } from "../../components/DefaultButton";

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curdo e
          descanso longo.
        </p>
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <DefaultInput type="text" id="workTime" labelText="Foco" />
          </div>
          <div className="formRow">
            <DefaultInput
              type="text"
              id="shortBreakTime"
              labelText="Descanso curto"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              type="text"
              id="shortBreakTime"
              labelText="Descanso longo"
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
