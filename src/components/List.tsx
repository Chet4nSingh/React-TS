import React from "react";
import ListItem from "./ListItem";

const List: React.FC<{
  items: { id: number; name: string; quantity: number }[];
}> = (props) => {
  return (
    <ul className="bg-sky-800 text-white text-4xl w-1/2 p-8 flex flex-col items-center gap-4">
      {props.items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
