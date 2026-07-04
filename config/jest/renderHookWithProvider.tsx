import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { createTestStore } from "./createTestStore";

export function renderHookWithProvider<T>(hook: () => T) {
  const store = createTestStore();

  const wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return renderHook(hook, { wrapper });
}
