import HomePage from "./components/Homepage";
import NavBar from "./components/navBar";
import ItemsPage from "./components/itemsPage";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HomePage />
      <ItemsPage />
    </div>
  );
}

export default App;
