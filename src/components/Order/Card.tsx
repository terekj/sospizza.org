/*
 img
 title
 body
*/
"use client";
import * as React from "react";
import { motion } from "motion/react";

interface CardProps {
  className?: string;
  src: string;
  title: string;
  body: React.ReactNode;
}
const Card = ({ className = "", src, title, body }: CardProps) => {
  const marginAdd = className.includes("flex-row-reverse") ? "mr-16" : "ml-16";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={"card flex flex-row" + " " + className}>
        <div className="card-img basis-1/3">
          <img
            src={src}
            alt="card image"
            width="100%"
            height="100%"
            className="box-border border-8 border-red object-cover overflow-hidden"
          ></img>
        </div>
        <div className={"card-text flex flex-col basis-2/3" + " " + marginAdd}>
          <div className="card-title text-red font-ultra text-md lg:text-4xl">
            {title}
          </div>
          <div className="card-body text-black font-podkova text-md lg:text-3xl">
            {body}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
