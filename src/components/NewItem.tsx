import React, { useRef } from "react";

const NewItem: React.FC<{ addNewItem: (text: string) => void }> = (props) => {
  const input: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const enteredItem = input.current!.value;
    if (enteredItem.trim().length === 0) {
      //! throw error...
      return;
    }

    props.addNewItem(enteredItem);
    input.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 text-center p-8 text-2xl">
      <input
        ref={input}
        className="text-2xl p-2 text-sky-800 border-none outline-none"
        type="text"
        id="text"
      />
      <button className="ml-8 border px-4 py-2">Add Item</button>
    </form>
  );
};

export default NewItem;
