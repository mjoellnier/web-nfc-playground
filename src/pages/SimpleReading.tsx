import * as React from "react";
import "../assets/styles/App.scss";

// dirty hack to keep TypeScript happy
declare var NDEFReader: any;

const SimpleReading = () => {
  const [result, setResult] = React.useState("...pending");

  React.useEffect(() => {
    const reader = new NDEFReader();
    reader
      .scan()
      .then(() => {
        alert("Scan started successfully.");
        reader.onerror = () => {
          setResult("Cannot read data from the NFC tag. Try another one?");
        };
        reader.onreading = (event: any) => {
          console.log("NDEF message read.");
          setResult(event);
        };
      })
      .catch((error: any) => {
        alert(`Error! Scan failed to start: ${error}.`);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <h2>Scan your NFC token!</h2>
      Result: {JSON.stringify(result)}
    </div>
  );
};

export default SimpleReading;
