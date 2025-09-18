import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessagesContainer";
import { MainRouter } from "./router/MainRouter";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter/>
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
