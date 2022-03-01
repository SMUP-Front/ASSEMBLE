import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeadBefore from "../Components/common/Header/Before";
import LoginPage from "../Components/common/Login/Login";
import { Head } from "../Components/common/Soom/PostChat/styles";
import ChatPage from "../Components/pages/Chat";

function MainRoute() {
  return (
      <>
      
      <HeadBefore />
    <Routes>
        
        <Route path="/main" element={<></>} />
        <Route path="/chat" element={<ChatPage />} />
    </Routes>
      </>
  );
}

export default MainRoute;
