import { HTMLAttributes } from "react";

export interface IIConProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  width?: number;
  height?: number;
}
