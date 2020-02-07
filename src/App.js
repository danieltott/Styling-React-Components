import React from "react";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <div>
        <Button>Default Button</Button>
      </div>
      <div>
        <Button variant="secondary">Secondary Button</Button>
      </div>
      <div>
        <Button variant="danger">Danger Button</Button>
      </div>
      <div>
        <Button outline>Outline Button</Button>
      </div>
      <div>
        <Button disabled>Disabled Button</Button>
      </div>
      <div>
        <Button size="lg">Large Button</Button>
      </div>
      <div>
        <Button size="sm">Small Button</Button>
      </div>
      <div>
        <Button loading>Loading Button</Button>
      </div>
    </div>
  );
}
