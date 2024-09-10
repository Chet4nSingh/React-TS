import React from "react";

const ListItem: React.FC<{
  item: { id: number; name: string; quantity: number };
}> = (props) => {
  return (
    <li className="w-2/3 p-4 text-center border hover:scale-110 duration-100">
      <span>{props.item.name}</span>
      <span>{props.item.quantity}</span>
    </li>
  );
};

export default ListItem;
