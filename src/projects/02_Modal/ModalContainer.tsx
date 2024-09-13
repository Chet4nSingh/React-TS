import { useState } from "react";
import Modal from "./Modal";

const ModalContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="h-screen bg-black text-white">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-2 h-2 p-4 m-16 rounded-full bg-white outline-none hover:scale-125 duration-75"
      ></button>
      <Modal open={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </main>
  );
};

export default ModalContainer;
