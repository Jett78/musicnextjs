import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import FeaturedCard from "./FeaturedCard";

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

const Featuredsection = () => {

 const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured);

  return (
    <main className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Featured Courses</h2>
          <p className="text-xl pt-3">learn with the Best</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
         {featuredCourses.map((course:Course,index) => (
            <FeaturedCard key={course.id} course={course}/>
         ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="bg-white text-black p-3 font-semibold">
            View All Courses
          </button>
        </Link>
       
      </div>
     
   
    </main>
  );
};

export default Featuredsection;
