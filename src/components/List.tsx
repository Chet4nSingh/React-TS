import React from "react";

const List: React.FC<{
  items: { id: number; name: string; quantity: number }[];
}> = (props) => {
  return (
    <ul className="bg-sky-800 text-white text-4xl w-1/2 p-8 flex flex-col items-center gap-4">
      {props.items.map((item) => (
        <li key={item.id} className="w-2/3 p-4 text-center border hover:scale-110 duration-100">
          <span>{item.name}</span>
          <span>{item.quantity}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
