import React from "react";
import css from "./ModalComponent.module.scss";

interface ModalComponentProps extends React.PropsWithChildren<{}> {
  show: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  show,
  onClose,
  children,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
