import {NavigationBar} from "./components"
import {Header, About} from "./pages";

// MIGHT CHANGE CONTENT HEIGHT TO TAKE AS MUCH SCREEN AS CONTENT NEEDED
// min-h-screen

function App() {
  return (
    <div className="App bg-primaryBlack text-primaryWhite font-poppins w-full min-h-screen">
      <div className="w-full min-h-screen max-w-[1440px] mx-auto grid grid-cols-mobGrid pb-12  xtraSm:grid-cols-tabGrid auto-rows-deskRows smDesk:pb-6 lrgDesk:grid-cols-deskGrid lrgDesk:auto-rows-auto lrgDesk:p-0 xtraLrgDesk:grid-cols-xlDeskGrid">
        <NavigationBar />
        {/* <Header /> */}
        <About/>
      </div>
    </div>
  );
}

export default App;
