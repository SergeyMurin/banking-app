import * as React from "react";
import { useCallback, useState } from "react";
import QrReader from "react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../config/routesConfig";

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

  const navigate = useNavigate();

  React.useEffect(() => {
    if (result?.text) {
      navigate(`${routesConfig.path.form}/${result.text}`);
    }
  }, [result]);

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
        setCameraAccess(true);
        console.log("Доступ к камере получен");
      })
      .catch((err) => {
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
