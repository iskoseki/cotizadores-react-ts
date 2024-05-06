import React from "react";
import "./App.css";
import "./themes/css/colors.css";
import "./themes/css/styler.css";

import QuoterContainer from "./components/QuoterContainer/QuoterContainer";
//import ThirdStep from "./routes/FormPage";

export default function App() {
  return (
    <main role="main">
      <QuoterContainer />
    </main>
  );
}
