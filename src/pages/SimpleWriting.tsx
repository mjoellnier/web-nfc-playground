import * as React from "react";
import "../assets/styles/App.scss";
import { BackButton } from "../components/button/Buttons";

// dirty hack to keep TypeScript happy
declare var NDEFWriter: any;

const SimpleWriting = () => {
  const [result, setResult] = React.useState("...pending");

  React.useEffect(() => {
    const writer = new NDEFWriter();
    writer
      .write("Hello World")
      .then(() => {
        setResult("Message written.");
      })
      .catch((error: any) => {
        setResult(`Write failed :-( try again: ${error}.`);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <BackButton />
      <h2>Scan your NFC token to write to it!</h2>
      {result}
    </div>
  );
};

export default SimpleWriting;
