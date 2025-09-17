import "./styles/theme.css";
import "./styles/global.css";

import { Home } from "./Pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./Pages/NotFound";
import { AboutPomodoro } from "./Pages/AboutPomodo";

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />
          </Routes>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
