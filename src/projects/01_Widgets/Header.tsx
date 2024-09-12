import React from "react";
import Button from "./Button";

const Header: React.FC<{ selected: number; onSelectIcon: (id: number) => void }> = (props) => {
  return (
    <header className="text-stone-500 flex justify-start border-b-2 border-zinc-800">
      <Button selectedId={props.selected} id={0} onSelectIcon={props.onSelectIcon}>
        <i className="fa fa-home" aria-hidden="true"></i>
      </Button>
      <Button selectedId={props.selected} id={1} onSelectIcon={props.onSelectIcon}>
        <i className="fa fa-gear" aria-hidden="true"></i>
      </Button>
      <Button selectedId={props.selected} id={2} onSelectIcon={props.onSelectIcon}>
        <i className="fa fa-lock" aria-hidden="true"></i>
      </Button>
    </header>
  );
}

export default Header;
