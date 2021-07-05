import Styled from "styled-components";
import { Modal, Alert } from "react-bootstrap";

export const ModalBootstrap = Styled(Modal)`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AlertBootstrap = Styled(Alert)`
  background-color: #161616;
  margin: 0;
`;

export const PAlert = Styled.p`
  text-align: center;
  align-items: center;
  padding: 10px 30px;
  color: #464866;
  justify-content: center;
  font-size: 20px;
`;
