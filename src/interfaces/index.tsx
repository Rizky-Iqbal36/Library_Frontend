import { RefObject } from "react";

export interface IErrMessage {
  flag: string;
  message: string;
}

export interface IAuthPage {
  containerDiv: RefObject<HTMLDivElement>;
}
