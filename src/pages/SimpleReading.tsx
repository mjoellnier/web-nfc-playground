import * as React from "react";
import "../assets/styles/App.scss";
import { handleNfcData } from "../utils/NFCUtil";
import { BackButton } from "../components/button/Buttons";

// dirty hack to keep TypeScript happy
declare var NDEFReader: any;

const SimpleReading = () => {
  const [result, setResult] = React.useState("booting up... ");

  React.useEffect(() => {
    const reader = new NDEFReader();
    reader
      .scan()
      .then(() => {
        setResult("pending...");
        reader.onerror = () => {
          setResult("Cannot read data from the NFC tag. Try another one?");
        };
        reader.onreading = (event: any) => {
          console.log("NDEF message read.");
          handleNfcData(event).then((result) =>
            setResult(JSON.stringify(result))
          );
        };
      })
      .catch((error: any) => {
        setResult(`Error! Scan failed to start: ${error}.`);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <BackButton />
      <h2>Scan your NFC token!</h2>
      Result: {JSON.stringify(result)}
    </div>
  );
};

export default SimpleReading;
