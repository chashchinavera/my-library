import "./Modal.css";
import { useEffect, useRef } from "react";

interface ModalProps {
  type: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ type, isOpen, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog ref={dialogRef} onCancel={handleCancel} className="modal">
      <div className="modal-content">
        <h2>
          {type === "add" ? "Добавление новой книги" : "Редактирование книги"}
        </h2>
      </div>
    </dialog>
  );
};
