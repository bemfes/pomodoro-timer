import { changeColor, Colors } from "@/entities/settings";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";

export const useChangeColor = () => {
  const { color } = useAppSelector((state) => state.settingsReducer);
  const dispatch = useAppDispatch();

  function handleChangeColor(color: Colors) {
    dispatch(changeColor(color));
  }

  return { color, handleChangeColor };
};
