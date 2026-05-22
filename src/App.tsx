import { useRef } from "react";
import { Button } from "./components/ui/Button";
import { Paragraph } from "./components/ui/Paragraph";

function App() {
  const ref = useRef<HTMLParagraphElement>(null);

  function handleClick() {
    if (ref.current) {
      ref.current.style.color = "orange";
    }
  }
  return (
    <div>
      <div className="flex flex-col items-start gap-4 p-4">
        <div>
          <Paragraph ref={ref}>Default paragraph</Paragraph>
          <Button onClick={handleClick} variant="warning" size={"sm"}>
            Change color to orange
          </Button>
        </div>

        <Paragraph variant="success" size={"sm"}>
          Success paragraph
        </Paragraph>
        <Paragraph variant="warning" size={"lg"}>
          Warning paragraph
        </Paragraph>
        <Paragraph variant="error">Error paragraph</Paragraph>
        <Paragraph size="2xl" variant="warning">
          2xLarge paragraph
        </Paragraph>
        <Paragraph variant="error" className="text-blue-500 font-bold">
          Override example (blue wins)
        </Paragraph>
        <Paragraph asChild>
          <span>Hello, world! form slot </span>
        </Paragraph>
      </div>
      <br />
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          Primary Button
        </Button>
        <Button variant="secondary" size="sm">
          Secondary Button
        </Button>
        <Button variant="outLine" size="md">
          Outline Button
        </Button>
        <Button variant="denger" size="lg">
          Danger Button
        </Button>
        <Button variant="success" size="xl">
          Success Button
        </Button>
      </div>
    </div>
  );
}

export default App;
