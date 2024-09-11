import { useState } from "react";
import List from "./components/List";
import NewItem from "./components/NewItem";

const LIST_ITEMS = [
  {
    id: 1,
    name: "Eggs",
    quantity: 12,
  },
  {
    id: 2,
    name: "Bread",
    quantity: 12,
  },
  {
    id: 3,
    name: "Cheese",
    quantity: 12,
  },
  {
    id: 4,
    name: "Cake",
    quantity: 12,
  },
];

function App() {

  const [list, setList] = useState<{ name: string }[]>([]);

  const handleAddNewItem = (newItem: string) => {
    setList((prevItems) => {
      return [...prevItems, {name: newItem}];
    });
  };

  return (
    <main className="w-full h-screen bg-sky-800 text-white flex flex-col justify-center items-center">
      <NewItem addNewItem={handleAddNewItem} />
      <List items={list} />
    </main>
  );
}

export default App;
