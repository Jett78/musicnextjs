import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-[2em] sm:mx-[10em] justify-center items-center gap-10">
        <div>
          <h2 className="font-bold">About Us</h2>
          <p className="py-6">
            Music School is a premier institute dedicated to learning the art
            and science of music.We nurture talent from the ground up,fostering
            a vibrant community of musicians
          </p>
        </div>

        <div className="pl-0 sm:pl-20">
          <h2 className="font-bold">Quick Links</h2>
          <div className="grid py-8">
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
            <Link href={"/Courses"}>Courses</Link>
            <Link href={"/Contact"}>Contact</Link>
          </div>
        </div>

        <div className="pl-0 sm:pl-10">
          <h2 className="font-bold">Follow Us</h2>
          <div className="py-8 grid">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div>
          <h2 className="font-bold">Contact Us</h2>
          <div className="grid py-8">
            <p>Kumbeshwar-11,Lalitpur</p>
            <p>Email:jetdeula@gmail.com</p>
            <p>Phone:+977-9860915649</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-center text-gray-500">2024|Jeet Deula|All rights Reserved</h2>
    </footer>
  );
};

export default Footer;
