import React from "react";

import cls from "./style.module.scss";
import clsx from "clsx";
import Image from "next/image";
import bgImage from "@/assets/images/main_bg.png";
import photo from "@/assets/images/myPhoto.png";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import sass from "@/assets/images/sass.png";
import js from "@/assets/images/js.png";
import react from "@/assets/images/react.png";
import reactNative from "@/assets/images/reactNatiive.png";
import nodejs from "@/assets/images/nodeJS.png";
import mongo from "@/assets/images/mongo.png";
import nginx from "@/assets/images/nginx.png";
import docker from "@/assets/images/docker.png";
import redux from "@/assets/images/redux.png";
import next from "@/assets/images/next.png";
import { useIntersection } from "next/dist/client/use-intersection";
import { Button } from "@/components";

export default function About() {
  return (
    <section className={cls.section}>
      <div className={cls.about}>
        <h2>ABOUT ME</h2>
        <div className={cls.textWrapper}>
          <p>
            <span>Hello, I´m Pavel,</span> web-developer based on Minsk. <br />{" "}
            I have rich experience in web developing & building and
            customization E-commerce platforms,UI Kit and mobile Apps. Also I am
            good at{" "}
            <span>
              React, React-Native, Next, NodeJS, Express, MongoDB, Docker,
              Nginx.
            </span>
          </p>
        </div>
        <div className={cls.buttons}>
          <Button>Download CV</Button>
        </div>
      </div>
      <div className={cls.mainPhoto}>
        <Image
          src={photo}
          alt="Photo"
          sizes="100%"
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
            filter: " brightness(100%) ",
            maxHeight: "90vh",
          }}
          placeholder="blur"
          className={cls.photo}
        />
      </div>
    </section>
    // <div className={clsx(cls.wrapper, cls.wrapperActive, cls.index)}>
    //   <Image
    //     alt="Desc"
    //     src={bgImage}
    //     quality={100}
    //     fill
    //     sizes="100%"
    //     style={{
    //       objectFit: "cover",
    //       filter: "grayscale(100%) brightness(40%)",
    //     }}
    //     placeholder="blur"
    //   />
    //   <div className={cls.header}>
    //     <div className={cls.photoWrapper}>
    //       <Image
    //         src={photo}
    //         alt="Photo"
    //         sizes="100%"
    //         style={{
    //           height: "100%",
    //           width: "auto",
    //           objectFit: "fill",
    //           filter: " brightness(100%) ",
    //         }}
    //         placeholder="blur"
    //         className={cls.photo}
    //       />
    //     </div>
    //     <div className={cls.title}>
    //       <h1>
    //         Hi, <br /> I`m Pavel, a
    //         <br /> Web Developer
    //       </h1>
    //       <div className={cls.achievements}>
    //         <ul>
    //           <li>Born in 1988, in Volkovysk, Belarus</li>
    //           <li>
    //             Experienced in web development from 2020, write clean, elegant
    //             and efficient code
    //           </li>
    //           <li>I believe web developer can be more diverse and inspiring</li>
    //           <li>
    //             I`m pursuing new expressions through learning, experiments and
    //             thoughts
    //           </li>
    //           <li>
    //             I`ve developed many types of front-ends from well know DJ
    //             applications to Ecommerce booking platforms
    //           </li>
    //           <li>
    //             I`m passionate about cutting-edge, pixel-perfect, beautiful
    //             interfaces and intuitively implemented UX
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={cls.skills}>
    //     <Image
    //       src={html}
    //       alt="HTML icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={css}
    //       alt="css icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={js}
    //       alt="js icon"
    //       style={{
    //         scale: 1.2,
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={sass}
    //       alt="SASS icon"
    //       style={{
    //         scale: 0.8,
    //         margin: " 0 -3vw",
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={react}
    //       alt="React icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={reactNative}
    //       alt="ReactNative icon"
    //       style={{
    //         scale: 1.5,
    //         position: "relative",
    //         bottom: "-2vh",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={redux}
    //       alt="Redux icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={next}
    //       alt="Next icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={nodejs}
    //       alt="NodeJS icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={mongo}
    //       alt="MongoDB icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={nginx}
    //       alt="NGINX icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //     <Image
    //       src={docker}
    //       alt="Docker icon"
    //       style={{
    //         objectFit: "fill",
    //         filter: " grayscale(40%) ",
    //       }}
    //       placeholder="blur"
    //     />
    //   </div>
    // </div>
  );
}
