"use client";
import React, { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
type Props = {
  href: string;
  label?: string;
  children?: React.ReactNode;
};

import cls from "./style.module.scss";
import { createPortal } from "react-dom";
export const AnimationLink: FC<Props> = ({
  href,
  label,
  children,
  ...props
}) => {
  const [start, setStart] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <button onClick={() => pathname !== href && setStart(true)} {...props}>
        {label}
        {children}
      </button>
      {start &&
        pathname !== href &&
        createPortal(
          <div className={cls.wrapper}>
            <motion.div
              className={cls.container1}
              initial={{ y: "100vh" }}
              animate={start && { y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className={cls.container2}
              initial={{ y: "100vh" }}
              animate={start && { y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.6 }}
            ></motion.div>
            <motion.div
              className={cls.container3}
              initial={{ y: "100vh" }}
              animate={start && { y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
            ></motion.div>
            <motion.div
              className={cls.container4}
              initial={{ y: "100vh" }}
              animate={start && { y: 0 }}
              onAnimationComplete={() => {
                setTimeout(() => router.push(href), 200);
                setTimeout(() => setStart(false), 300);
              }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </div>,
          document.body,
        )}
    </>
  );
};
