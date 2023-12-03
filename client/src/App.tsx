import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AppRoutes from "./routes/Routes";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div id="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
};
export default App;
