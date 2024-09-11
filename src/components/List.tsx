import React from "react";
import ListItem from "./ListItem";

const List: React.FC<{
  items: { name: string }[];
}> = (props) => {
  return (
    <ul className="text-4xl w-1/2 flex flex-col items-center gap-4">
      {props.items.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default List;
