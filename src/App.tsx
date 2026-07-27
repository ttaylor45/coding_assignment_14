import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Dropdown } from "./components/Dropdown";
import { Label } from "./components/Label";
import { RadioButton } from "./components/RadioButton";
import { Table } from "./components/Table";
import { Text } from "./components/Text";
import { Img } from "./components/Img";
import { HeroImg } from "./components/HeroImg";
import React from "react";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Taylor Trent UI Garden</h1>
      <p>THis is a test for sam<p>

      <h2>Components</h2>

      <h3>Button</h3>
      <Button text="default button" backgroundColor="blue" />

      <Button text="disabled button" disabled />

      <h3>Card</h3>
      <Card title="Card Title" text="This is a card." />

      <Card
        title="Disabled Card Title"
        text=" This is a disabled card."
        disabled
      />

      <h3>Dropdown</h3>
      <Dropdown options={["Option 1", "Option 2"]} />

      <Dropdown options={["Option 1", "Option 2"]} disabled />

      <h3>Label</h3>
      <Label text="This is a label." />

      <Label text="Disabled Label" disabled />

      <h3>Radio Button</h3>
      <RadioButton label="Option A" />

      <RadioButton label="Disabled Option" disabled />

      <h3>Table</h3>
      <Table />
      <br />
      <Table disabled />

      <h3>Text</h3>
      <Text text="This is some text." />
      <Text text="Disabled Text" disabled />

      <h2>Images</h2>
      <Img src="https://via.placeholder.com/300x150" alt="Default Image" />
      <Img
        src="https://via.placeholder.com/300x150"
        alt="Disabled Image"
        disabled
      />

      <h3>Hero Image</h3>

      <HeroImg
        imageurl="https://via.placeholder.com/1000x300"
        title="Default Hero Image"
      />
      <HeroImg
        imageurl="https://via.placeholder.com/1000x300"
        title="Disabled Hero Image"
        disabled
      />
    </div>
  );
}

export default App;
