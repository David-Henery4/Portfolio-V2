import {NavigationBar} from "./components"
import {Header} from "./pages";

// MIGHT CHANGE CONTENT HEIGHT TO TAKE AS MUCH SCREEN AS CONTENT NEEDED
// min-h-screen

function App() {
  return (
    <div className="App bg-primaryBlack text-primaryWhite w-full min-h-screen grid grid-cols-mobGrid pb-12 font-poppins xtraSm:grid-cols-tabGrid">
      <NavigationBar />
      <Header />
    </div>
  );
}

export default App;
