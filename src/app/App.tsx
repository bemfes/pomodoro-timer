import { FC, useEffect } from "react";
import "./index.css";
import PomodoroTimerPage from "@/pages/PomodoroTimerPage";
import { useAppSelector } from "@/shared/lib/hooks";

const App: FC = () => {
  const { font } = useAppSelector((state) => state.settingsReducer);
  useEffect(() => {
    document.body.setAttribute("data-font", font);
  }, [font]);
  return (
    <>
      <PomodoroTimerPage />
    </>
  );
};

export default App;
