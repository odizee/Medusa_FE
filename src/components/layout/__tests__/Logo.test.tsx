import { render, screen } from "@/test/utils";
import { Logo } from "../Logo";

describe("Logo", () => {
  it("renders correctly", () => {
    render(<Logo />);

    expect(screen.getByText("Untitled UI")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Logo className="test-class" />);

    const container = screen.getByText("Untitled UI").parentElement;
    expect(container).toHaveClass("test-class");
  });
});
