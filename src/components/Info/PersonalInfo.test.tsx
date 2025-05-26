import { render } from "@testing-library/react";
import PersonalInfo from "./PersonalInfo";

describe("PersonalInfo", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<PersonalInfo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
