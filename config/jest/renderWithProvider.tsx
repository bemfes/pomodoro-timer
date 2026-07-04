import { render } from "@testing-library/react";
import { createTestStore } from "./createTestStore";
import { Provider } from "react-redux";
import React from "react";

export function renderWithProvider(ui: React.ReactElement) {
  const store = createTestStore();

  return render(<Provider store={store}>{ui}</Provider>);
}
