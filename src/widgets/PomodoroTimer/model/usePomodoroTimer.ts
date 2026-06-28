import { changeIsRunning, goToNextMode, setTime, tick } from "@/entities/timer";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { useEffect, useMemo, useRef } from "react";
import swooshSound from "@/shared/assets/sounds/swoosh-sound.mp3";

export const usePomodoroTimer = () => {
  const { mode, isRunning, timeLeft } = useAppSelector(
    (state) => state.timerReducer,
  );

  const duration = useAppSelector((state) => state.settingsReducer[mode]);

  const { color, soundOn } = useAppSelector((state) => state.settingsReducer);

  const dispatch = useAppDispatch();

  const handleChangeIsRunning = () => {
    dispatch(changeIsRunning());
  };

  useEffect(() => {
    if (timeLeft >= 0) return;
    dispatch(goToNextMode());
  }, [timeLeft, dispatch]);

  useEffect(() => {
    dispatch(setTime(duration * 60));
  }, [mode, duration, dispatch]);

  const soundModeChange = useMemo(() => new Audio(swooshSound), []);

  const firstRender = useRef(true);

  const soundOnRef = useRef(soundOn);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (soundOnRef.current) {
      soundModeChange.play().catch(() => {});
    }
  }, [mode, soundModeChange]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      dispatch(tick());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, dispatch]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");

  const seconds = String(timeLeft % 60).padStart(2, "0");

  const percentage = (timeLeft * 100) / (duration * 60);

  return {
    isRunning,
    minutes,
    seconds,
    color,
    percentage,
    handleChangeIsRunning,
  };
};
