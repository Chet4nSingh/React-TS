import List from "./components/List";

const LIST_ITEMS = [
  {
    id: 1,
    name: 'Eggs',
    quantity: 12,
  },
  {
    id: 2,
    name: 'Bread',
    quantity: 12,
  },
  {
    id: 3,
    name: 'Cheese',
    quantity: 12,
  },
  {
    id: 4,
    name: 'Cake',
    quantity: 12,
  },
]

function App() {
  return <main className="w-full h-screen grid place-items-center">
    <List items={LIST_ITEMS}/>
  </main>
}

export default App;
