import React from "react";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes";
import "./styles/global.scss";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

export default App;
