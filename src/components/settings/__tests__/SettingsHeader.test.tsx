import { render, screen } from "@/test/utils";
import { SettingsHeader } from "../SettingsHeader";

describe("SettingsHeader", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test Description",
  };

  it("renders title and description", () => {
    render(<SettingsHeader {...defaultProps} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
