import {NavigationBar, Sidebar} from "./components"
import { Outlet } from "react-router-dom";
import {Header, About, Projects, Skills, Contact} from "./pages";
import { useState } from "react";

// MIGHT CHANGE CONTENT HEIGHT TO TAKE AS MUCH SCREEN AS CONTENT NEEDED
// min-h-screen

function App() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  return (
    <div className="App bg-primaryBlack text-primaryWhite font-poppins w-full min-h-screen">
      <div className="w-full min-h-screen max-w-[1440px] mx-auto grid grid-cols-mobGrid pb-12  xtraSm:grid-cols-tabGrid auto-rows-deskRows smDesk:pb-6 lrgDesk:grid-cols-xlDeskGrid lrgDesk:auto-rows-auto lrgDesk:p-0">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <NavigationBar setIsSidebarOpen={setIsSidebarOpen}/>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
