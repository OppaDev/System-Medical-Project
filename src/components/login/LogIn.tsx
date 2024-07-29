import React, { useState } from "react";
import Modal from "../utils/Modal";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>LogIn</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  );
};
