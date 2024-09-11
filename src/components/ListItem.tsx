import React from "react";

const ListItem: React.FC<{
  item: { name: string };
  onRemoveItem: (name: string) => void;
}> = (props) => {
  return (
    <li
      onClick={() => props.onRemoveItem(props.item.name)}
      className="w-2/3 p-4 text-center border hover:scale-110 duration-100"
    >
      <span>{props.item.name}</span>
    </li>
  );
};

export default ListItem;
