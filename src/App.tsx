import List from "./components/List";
import NewItem from "./components/NewItem";
import ItemsContextProvider from "./store/ItemsContext";

function App() {
  return (
    <ItemsContextProvider>
      <main className="w-full h-screen bg-sky-800 text-white flex flex-col justify-center items-center">
        <NewItem />
        <List />
      </main>
    </ItemsContextProvider>
  );
}

export default App;
