"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className=" bg-black h-auto min-h-screen md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-6xl md:text-8xl  font-bold mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
          Master the Art of Music
        </h1>
        <p className="font-normal md:text-lg mt-10 max-w-[500px] mx-auto ">
          Dive into our comprehensive music courses and transform your musical
          journey today.Whether you're a begineer or looking to refine yor
          skills,join us to unlock your true potential.
        </p>
        <div className="mt-10">
          <Link href={"/courses"}>
            <Button
              borderRadius="2rem"
              className="bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800" >
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
