import React from "react";
import {
  ModalBootstrap,
  AlertBootstrap,
  // PAlert,
} from "@root/styles/components/atom/alertModal.element";

interface IAlertModal {
  show: boolean;
  onHide: () => void;
}
const AlertModal: React.FC<IAlertModal> = ({ onHide, show, children }) => {
  return (
    <ModalBootstrap
      show={show}
      onHide={onHide}
      size="lg"
      centered
      id="addSuccess"
    >
      <AlertBootstrap variant="none">{children}</AlertBootstrap>
    </ModalBootstrap>
  );
};

export default AlertModal;
