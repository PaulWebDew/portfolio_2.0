import React from "react";

import type { FC } from "react";
import type { IIConProps } from "@/assets/icons/type";
export const DownloadIcon: FC<IIConProps> = ({
  width,
  height,
  color,
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width={width ?? "800px"}
        height={height ?? "800px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
          stroke={color ?? ("currentColor" || "#1C274C")}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
          stroke={color ?? ("currentColor" || "#1C274C")}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
