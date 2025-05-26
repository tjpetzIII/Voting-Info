import React from "react";
import { render } from "@testing-library/react";
import ProfessionalLinks from "./ProfessionalLinks";

describe("ProfessionalLinks", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ProfessionalLinks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
