import { render } from "@testing-library/react";
import ContactInfo from "./ContactInfo";

describe("ContactInfo", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ContactInfo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
