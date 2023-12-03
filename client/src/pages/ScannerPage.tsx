import * as React from "react";
import Scanner from "../components/scanner/Scanner";

interface IScannerPageProps {}

const ScannerPage: React.FunctionComponent<IScannerPageProps> = (props) => {
  return (
    <div>
      <h1>Scanner Page</h1>
      <Scanner />
    </div>
  );
};

export default ScannerPage;
