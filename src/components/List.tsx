import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ItemsContext } from "../store/ItemsContext";

const List = () => {
  const {items, removeItem} = useContext(ItemsContext);
  return (
    <ul className="text-4xl w-1/2 flex flex-col items-center gap-4">
      {items.map((item) => (
        <ListItem key={item.name} item={item} onRemoveItem={removeItem} />
      ))}
    </ul>
  );
};

export default List;
