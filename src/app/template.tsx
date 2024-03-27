"use client";

import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect } from "react";
import cls from "@/components/animationLink/style.module.scss";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={cls.wrapper}>
        <motion.div
          className={cls.container1}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        >
          <div className={cls.item1}></div>
          <div className={cls.item2}></div>
          <div className={cls.item3}></div>
          <div className={cls.item4}></div>
        </motion.div>
        <motion.div
          className={cls.container2}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
        >
          <div className={cls.item1}></div>
          <div className={cls.item2}></div>
          <div className={cls.item3}></div>
          <div className={cls.item4}></div>
        </motion.div>
        <motion.div
          className={cls.container3}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        >
          <div className={cls.item1}></div>
          <div className={cls.item2}></div>
          <div className={cls.item3}></div>
          <div className={cls.item4}></div>
        </motion.div>
        <motion.div
          className={cls.container4}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
        >
          <div className={cls.item1}></div>
          <div className={cls.item2}></div>
          <div className={cls.item3}></div>
          <div className={cls.item4}></div>
        </motion.div>
      </div>
      {children}
    </>
  );
}
