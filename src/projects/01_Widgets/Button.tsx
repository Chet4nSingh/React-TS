import { ReactNode } from "react";

 const Button: React.FC <{ selectedId: number, id: number, onSelectIcon: (id: number) => void, children: ReactNode }> = (props) => {
    function handleClick() {
      props.onSelectIcon(props.id);
    }
  
    let cssStyles = "p-4 text-xl hover:text-stone-400 ";
  
    if (props.selectedId === props.id) {
      cssStyles +=
        "text-purple-500 border-b-4 border-purple-500 hover:text-purple-500";
    }
  
    return (
      <button onClick={handleClick} className={cssStyles}>
        {props.children}
      </button>
    );
  }

  export default Button;
  