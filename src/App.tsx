import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainRoute from "./Router";
import LoginPage from "./Components/common/Login/Login";
import HeadBefore from "./Components/common/Header/Before";
import { Head, Main } from "./Components/common/Soom/PostChat/styles";
import ChatPage from "./Components/pages/Chat";

function App() {
  return (
    <>
      <MainRoute />
    </>
  );
}

export default App;
