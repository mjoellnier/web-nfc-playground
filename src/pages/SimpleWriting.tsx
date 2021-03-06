import * as React from "react";
import "../assets/styles/App.scss";
import { ActionButton, BackButton } from "../components/button/Buttons";
import { createWriteRecord, WriteTypes } from "../utils/NFCUtil";

// dirty hack to keep TypeScript happy
declare var NDEFWriter: any;

const SimpleWriting = () => {
  const userLang = navigator.language;
  const [result, setResult] = React.useState("Write!");
  const [content, setContent] = React.useState(String);
  const writer = new NDEFWriter();

  const write = () => {
    writer
      .write(createWriteRecord(WriteTypes.TEXT, content, userLang))
      .then(() => {
        setResult("Message written.");
      })
      .catch((error: any) => {
        setResult(`Write failed :-( try again`);
        console.error("Write Error: ", error);
      });
  };

  return (
    <div className="home-wrapper">
      <BackButton />
      <h2>What do you want to write?</h2>
      <textarea
        rows={5}
        value={content}
        onChange={(value) => setContent(value.target.value)}
      />
      <ActionButton text={result} action={() => write()} />
    </div>
  );
};

export default SimpleWriting;
