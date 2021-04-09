import React from "react";
import { render } from "@testing-library/react";
import Component from "./SearchItem";

test("renders", () => {
  const { getByText } = render(<Component name="Lorem ipsum dolor sit amet" />);
  expect(getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
});
