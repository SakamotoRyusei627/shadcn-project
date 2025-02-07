import FakeTimeTryPage from "@/project/pages/FakeTimeTryPage.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

const renderFakeTimeTryPage = () => {
  render(<FakeTimeTryPage />);
};

describe("FakeTimeTryPageTest", () => {
  it('should render the text "aaaa"', async () => {
    renderFakeTimeTryPage();

    expect(screen.queryByText("aaaa")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "表示する" }));

    expect(screen.getByText("aaaa")).toBeInTheDocument();
  });
});
