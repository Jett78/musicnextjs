"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MovingCards = () => {
  const testimonials = [
    {
      quote:
        "With skilled instructors, diverse courses, and a welcoming community, it's the perfect place to nurture your musical talent, no matter your level. Highly recommend!",
      name: "Ram Kapoor",
    },
    {
      quote:
        "The supportive community and inspiring atmosphere pushed me to strive for excellence. The opportunities for performance and collaboration have been invaluable in shaping my musical identity..",
      name: "Saujanya Shrestha",
    },
    {
      quote:
        "The diverse range of courses and performance opportunities allowed me to explore different genres and develop a well-rounded skill set.",
      name: "Binod Shakya",
    },
    {
      quote:
        "The institute's emphasis on creativity and innovation challenged me to push my boundaries and think outside the box. I'm incredibly grateful for the friendships I've made and the support I've received",
      name: "Justin Gabriel",
    },
    {
      quote:
        ".]I've not only improved my technical skills but also gained confidence in my artistic abilities. The institute truly fosters a passion for music and provides the resources needed to succeed",
      name: "Tosin Deula",
    },
  ];
  return (
    <main>
      <div className="h-[40rem]  w-full rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
        <h2 className="text-5xl font-bold mb-10">
          Hear our Harmony:Voices of Success
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </main>
  );
};

export default MovingCards;
