import * as React from "react";
import "../assets/styles/App.scss";
import { MenuButton } from "../components/button/Buttons";

const App = () => {
  const [canRead, setCanRead] = React.useState(false);
  const [canWrite, setCanWrite] = React.useState(false);

  React.useEffect(() => {
    console.log("Checking your NFC capabilities:");
    if ("NDEFReader" in window) {
      console.log("✅ You can read NFC tags!");
      setCanRead(true);
    } else {
      console.log("❌ You can NOT read NFC tags!");
    }
    if ("NDEFWriter" in window) {
      console.log("✅ You can write NFC tags!");
      setCanWrite(true);
    } else {
      console.log("❌ You can NOT write read NFC tags!");
    }
  }, []);

  return (
    <div className="home-wrapper">
      <div id="nfc-capability-intro">
        <h1>Your NFC capabilites:</h1>
        <h3>Reading NFC: {canRead ? "✅" : "❌"}</h3>
        <h3>Writing NFC: {canWrite ? "✅" : "❌"}</h3>
      </div>
      <MenuButton target="/simplereading" text="Simple Reading" />
    </div>
  );
};

export default App;
