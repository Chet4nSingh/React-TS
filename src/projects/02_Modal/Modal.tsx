import React, { useEffect, useRef } from "react";

const Modal: React.FC<{ open: boolean; closeModal: () => void }> = ({
  open,
  closeModal,
}) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    }

    return () => {
        if (dialog.current) dialog.current.close();
    }
  }, [open]);

  return (
    <dialog
      id="modal"
      ref={dialog}
      onClose={closeModal}
      className="p-8 w-2/5 h-2/3 text-2xl outline-none"
    >
      <div className="text-right text-2xl">
        <button onClick={closeModal}>X</button>
      </div>
      <p>
        This is a modal window made using <br /> React + TypeScript + Tailwind
        CSS.
      </p>
    </dialog>
  );
};

export default Modal;
