import * as React from "react";
import { useCallback, useState } from "react";
import QrReader from "react-qr-scanner";

interface IScannerProps {}

interface IScannerResult {
  canvas: HTMLCanvasElement;
  format: number;
  numBits: number;
  rawBytes: Uint8Array;
  resultMetadata: Map<any, any>;
  resultPoints: Array<{
    x: number;
    y: number;
    estimatedModuleSize: number;
    count: number;
  }>;
  text: string;
  timestamp: number;
}

const Scanner: React.FunctionComponent<IScannerProps> = (props) => {
  const [result, setResult] = useState<IScannerResult | null>(null);
  const [scannerOn, setScannerOn] = useState(true);
  const [cameraAccess, setCameraAccess] = useState(false);

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

  const requestCameraPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        // Доступ к камере получен
        setCameraAccess(true);
        console.log("Доступ к камере получен");
      })
      .catch((err) => {
        // Обработка ошибок при доступе к камере
        console.error("Ошибка доступа к камере: ", err);
      });
  };

  return (
    <div>
      <h1>Scanner</h1>
      <button onClick={requestCameraPermission}>
        Разрешить доступ к камере
      </button>
      {scannerOn && cameraAccess ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      ) : (
        <></>
      )}
      {result ? result.text : ""}
    </div>
  );
};

export default Scanner;
