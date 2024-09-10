import FakeTimeTryPage from "@/project/pages/FakeTimeTryPage.tsx";
import { render, screen } from "@testing-library/react";

const renderFakeTimeTryPage = () => {
  render(<FakeTimeTryPage />);
};

describe("FakeTimeTryPageTest", () => {
  it('should render the text "aaaa"', () => {
    renderFakeTimeTryPage();

    expect(screen.getByText("aaaa")).toBeInTheDocument();
  });
});
