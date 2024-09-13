import React, { useEffect, useRef } from 'react'

const Modal: React.FC<{ open: boolean }> = ({ open }) => {

    const dialog = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (open && dialog.current) {
            dialog.current.showModal();
        }
    }, [open]);

  return (
    <dialog ref={dialog} className="p-8 w-2/5 h-2/3 text-2xl">
        This is a modal window made using <br/> React + TypeScript + Tailwind CSS.
    </dialog>
  )
}

export default Modal;