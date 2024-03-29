"use client";
import React, { FC } from "react";
import cls from "./style.module.scss";
import { HomeIcon, UserIcon } from "@/assets/icons";
import { LogoIcon } from "@/assets/icons/LogoIcon";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { AnimationLink } from "@/components/animationLink";
export const NavBar: FC = () => {
  const isActive = useSelectedLayoutSegment();
  return (
    <nav className={cls.nav}>
      <LogoIcon width={50} height={50} className={cls.logo} />
      <ul>
        <li>
          <AnimationLink href={"/"} data-selected={isActive == null}>
            <HomeIcon width={30} height={30} />
            <span>Home</span>
          </AnimationLink>
        </li>
        <li>
          <AnimationLink href={"/about"} data-selected={isActive == "about"}>
            <UserIcon width={30} height={30} />
            <span>About</span>
          </AnimationLink>
        </li>
      </ul>
    </nav>
  );
};
