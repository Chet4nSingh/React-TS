import List from "./components/List";
import NewItem from "./components/NewItem";
import Home from "./projects/01_Widgets/Home";
import ItemsContextProvider from "./store/ItemsContext";

function App() {
  return (
    // <ItemsContextProvider>
    //   <main className="w-full h-screen bg-sky-800 text-white flex flex-col justify-center items-center">
    //     <NewItem />
    //     <List />
    //   </main>
    // </ItemsContextProvider>

    <Home />
  );
}

export default App;
