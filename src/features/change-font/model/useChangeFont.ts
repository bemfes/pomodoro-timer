import { changeFont } from "@/entities/settings";
import type { Fonts } from "@/entities/settings";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks";
import { useEffect } from "react";

export const useChangeFont = () => {
  const { font } = useAppSelector((state) => state.settingsReducer);
  const dispatch = useAppDispatch();

  function handleChangeFont(font: Fonts) {
    dispatch(changeFont(font));
  }

  useEffect(() => {
    document.body.setAttribute("data-font", font);
  }, [font]);

  return { font, handleChangeFont };
};
