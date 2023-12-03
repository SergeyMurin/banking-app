import * as React from "react";
import { useCallback, useState } from "react";
import QrReader from "react-qr-scanner";

interface IScannerProps {}

const Scanner: React.FunctionComponent<IScannerProps> = (props) => {
  const [result, setResult] = useState("");
  const [scannerOn, setScannerOn] = useState(true);

  const handleScan = useCallback((data: any) => {
    if (data) {
      setResult(data);
      console.log(data);
      setScannerOn(false);
    }
  }, []);

  const handleError = useCallback((err: any) => {
    console.error(err);
  }, []);

  return (
    <div>
      <h1>Scanner</h1>
      {scannerOn ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Scanner;
