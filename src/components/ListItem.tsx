import React from "react";

const ListItem: React.FC<{
  item: { name: string };
}> = (props) => {
  return (
    <li className="w-2/3 p-4 text-center border hover:scale-110 duration-100">
      <span>{props.item.name}</span>
    </li>
  );
};

export default ListItem;
