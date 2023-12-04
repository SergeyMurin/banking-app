import * as React from "react";
import Scanner from "../components/scanner/Scanner";

interface IScannerPageProps {}

const ScannerPage: React.FunctionComponent<IScannerPageProps> = (props) => {
  return (
    <div>
      <Scanner />
    </div>
  );
};

export default ScannerPage;
