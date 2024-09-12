import Header from "./Header";
import Content from "./Content";
import { useState } from "react";

const DATA = [
  {
    title: "Home",
    description:
      "When you have a coding project due tomorrow but you spend the whole day searching for the perfect background music.",
  },
  {
    title: "Setting",
    description:
      "When your code finally runs after hours of debugging but you have no idea why it works.",
  },
  {
    title: "Account",
    description:
      "Me after solving a bug by myself vs. Me after finding the answer on Stack Overflow.",
  },
];

function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelectIcon(id: number) {
    setSelectedIndex(id);
  }

  return (
    <div className="container w-full grid place-items-center h-screen bg-zinc-800">
      <main className="bg-zinc-900 text-slate-200 w-[50%] md:w-[30%] rounded-md">
        <Header selected={selectedIndex} onSelectIcon={handleSelectIcon} />
        <Content
          title={DATA[selectedIndex].title}
          description={DATA[selectedIndex].description}
        />
      </main>
    </div>
  );
}

export default Home;
