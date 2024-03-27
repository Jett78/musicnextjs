"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skill",
    link: "/",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters",
    link: "/",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advaced technologies to master your musical instrument of choice",
    link: "/",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with the comprehensive overview",
    link: "/",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies",
    link: "/",
  },
  {
    title: "Digital Music Marketting",
    description:
      "Learn how to promote you music effectively in the digital age",
    link: "/",
  },
];

const Webinars = () => {
  return (
    <main className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
         
              <p className="text-xl pt-3">Featured Webinars</p>
              <h2 className="text-4xl font-bold">
                Enhance your musical journey
              </h2>
            
        </div>
      </div>

      <div className="mt-10">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="bg-white text-black p-3 font-semibold">
            View All Webinars
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Webinars;
