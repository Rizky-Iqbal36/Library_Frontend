import React from "react";
import {
  ModalBootstrap,
  AlertBootstrap,
  PAlert,
} from "@styles/components/atom/alertModal";

interface IAlertModal {
  show: boolean;
  onHide: () => void;
}
const AlertModal: React.FC<IAlertModal> = ({ onHide, show, children }) => {
  console.log({ onHide, show, children });
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
// import React from "react";

// interface IAlertModal {
//   show: boolean;
//   onHide: () => void;
// }
// export const AlertModal: React.FC<IAlertModal> = ({
//   onHide,
//   children,
//   show,
// }) => {
//   console.log({ onHide, children, show });
//   return <div>{children}</div>;
// };

// export default AlertModal;
