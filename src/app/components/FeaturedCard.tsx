"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  title: string;
  description: string;
}

const FeaturedCard: React.FC<{ course: Course }> = ({ course }) => {
  const { title, description} = course;
  return (
    <main>
      <BackgroundGradient className="rounded-[22px] max-w-auto p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="py-8">{description}</p>
          <Link href={'/courses/'} className="text-xl text-red-400">learn More</Link>
        </div>
      </BackgroundGradient>
    </main>
  );
};

export default FeaturedCard;
