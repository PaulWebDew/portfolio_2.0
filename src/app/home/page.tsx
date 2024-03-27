"use client";
import React, { useEffect, useState } from "react";
import { HomePage } from "@/app/home/ui/HomePage";
import { motion, AnimatePresence, usePresence } from "framer-motion";

export default function Home() {
  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);

  return (
    // <>
    //   <AnimatePresence>
    //     (
    //     <motion.div
    //       style={{
    //         position: "absolute",
    //         top: 0,
    //         left: 0,
    //         width: "100vw",
    //         height: "100vh",
    //         backgroundColor: "yellow",
    //         zIndex: 10,
    //       }}
    //       key="modal"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ ease: "easeInOut", duration: 2 }}
    //     ></motion.div>
    //     )
    <HomePage />
    // </AnimatePresence>
    // </>
  );
}
