import React from "react";
import "./App.css";
import "./themes/css/colors.css";
import "./themes/css/styler.css";
import QuoterContainer from "./components/QuoterContainer";
import UserID from "./utils/fetchUserId";

export default function App() {
  const { id, loading } = UserID();
  {
    loading
      ? console.log("CARGANDO ID DE USUARIO")
      : console.log("ID DE USUARIO", id);
  }

  return (
    <main role="main">
      <QuoterContainer />
    </main>
  );
}
