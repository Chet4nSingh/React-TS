import { createContext, FunctionComponent, ReactNode, useState } from "react";

type ItemsContextObj = {
  items: { name: string }[];
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
};

export const ItemsContext = createContext<ItemsContextObj>({
  items: [],
  addItem: () => {}, 
  removeItem: () => {},
});

const ItemsContextProvider: FunctionComponent<{ children?: ReactNode }> = ({children}) => {
  const [list, setList] = useState<{ name: string }[]>([]);

  const handleAddNewItem = (newItem: string) => {
    setList((prevItems) => {
      return [...prevItems, { name: newItem }];
    });
  };

  const handleRemoveItem = (name: string) => {
    setList((prevList) => {
      return prevList.filter((item) => item.name !== name);
    });
  };

  const ctxValue: ItemsContextObj = {
    items: list,
    addItem: handleAddNewItem,
    removeItem: handleRemoveItem,
  };

  return (
    <ItemsContext.Provider value={ctxValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
