import { render, screen } from "@testing-library/react";
import CircleProgressBar from "./CircleProgressBar";

const renderCircleProgressBar = () => {
  return render(
    <CircleProgressBar
      percentage={20}
      strokeColorActive="red"
      strokeColorBg="transparent"
      strokeWidth={12}
      radius={180}
      className=""
    >
      <p>20%</p>
    </CircleProgressBar>,
  );
};

describe("CircleProgressBar", () => {
  it("should render children", () => {
    renderCircleProgressBar();
    expect(screen.getByText(/20%/i)).toBeInTheDocument();
  });
  it("should render correct strokeColorActive prop", () => {
    const { container } = renderCircleProgressBar();
    const circles = container.querySelectorAll("circle");
    expect(circles[1]).toHaveAttribute("stroke", "red");
  });
  it("should render correct strokeColorBg prop", () => {
    const { container } = renderCircleProgressBar();
    const circles = container.querySelectorAll("circle");
    expect(circles[0]).toHaveAttribute("stroke", "transparent");
  });
  it("should calc correct circle radius", () => {
    const { container } = renderCircleProgressBar();

    const circles = container.querySelectorAll("circle");

    expect(circles[0]).toHaveAttribute("r", "174");
    expect(circles[1]).toHaveAttribute("r", "174");
  });

  it("should calc correct viewBox based on radius", () => {
    const { container } = renderCircleProgressBar();
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 360 360");
  });
  it("should calc correct dashOffset", () => {
    const { container } = renderCircleProgressBar();

    const circleRadius = 174;
    const circleLength = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circleLength * (1 - 20 / 100);

    const circles = container.querySelectorAll("circle");
    expect(circles[1]).toHaveAttribute(
      "stroke-dashoffset",
      strokeDashoffset.toString(),
    );
  });
});
