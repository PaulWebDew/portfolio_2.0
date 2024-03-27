"use client";
import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

import cls from "./style.module.scss";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PaulWebDew",
  description: "frontend developer",
};

const text = ["Web developer", "Freelancer", "Traveler"];

const SPELLING_DELAY = 150;
const ITERATION_DELAY = 2000;

export const HomePage: FC = () => {
  const [spellText, setSpellText] = useState<string[]>([]);
  const [delay, setDelay] = useState<number>(0);

  let arr: string[] = [];
  const add = (i: string, index: number) => {
    setTimeout(function () {
      setSpellText((prev) => [...prev, i]);
    }, SPELLING_DELAY * index);
  };

  const remove = (i: string, index: number) => {
    setTimeout(
      function () {
        setSpellText((prev) => {
          const newArr = prev;
          newArr.splice(-1, 1);
          return [...newArr];
        });
      },
      SPELLING_DELAY * index + ITERATION_DELAY,
    );
  };

  const iteration = (text: string[]) => {
    setSpellText([]);
    text.map((item, index) => {
      setTimeout(() => {
        const textArr = item.split("");
        textArr.map((item, index) => add(item, index));
        setTimeout(
          () => textArr.map((item, index) => remove(item, index)),
          SPELLING_DELAY * textArr.length,
        );
        setDelay(
          (prev) => prev + (SPELLING_DELAY * textArr.length + ITERATION_DELAY),
        );
      }, 7500 * index);
    });
  };

  useLayoutEffect(() => {
    iteration(text);
    setInterval(() => iteration(text), 22000);
  }, []);

  useLayoutEffect(() => {
    const getMouseMove = (e: MouseEvent) => {
      Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.008}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.016}deg;
        `,
      });
    };
    document.addEventListener("mousemove", (e) => getMouseMove(e));
    return () =>
      document.removeEventListener("mousemove", (e) => getMouseMove(e));
  }, []);

  return (
    <section className={cls.layers}>
      <div className={cls.container}>
        <div className={clsx(cls.item, cls.layer_1)}></div>
        <div className={clsx(cls.item, cls.layer_2)}></div>
        <div className={clsx(cls.item, cls.layer_3)}>
          <div className={cls.heroContent}>
            <h1 className={lora.className}>
              <span>Pavel</span> Mikhuta{" "}
            </h1>
            <h2>
              <span>I am a </span>{" "}
              <div className={cls.spelling}>{spellText.join("")}</div>
            </h2>
            <Link href={"mailto:paulwebdew@gmail.com"}>
              paulwebdew@gmail.com
            </Link>
          </div>
        </div>
        <div className={clsx(cls.item, cls.layer_4)}>
          <canvas className={cls.rain}></canvas>
        </div>
        <div className={clsx(cls.item, cls.layer_5)}></div>
        <div className={clsx(cls.item, cls.layer_6)}></div>
      </div>
    </section>
  );
};
