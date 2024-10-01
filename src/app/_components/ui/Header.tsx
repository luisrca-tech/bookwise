"use client"

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import bookwiseLogo from "/public/images/bookwiseLogo.png";
import exploreIcon from "/public/images/exploreIcon.png";
import startIcon from "/public/images/startIcon.png";
import profileIcon from "/public/images/profileIcon.png";

export function Header() {
  const { user } = useUser()

  return (
    <header className="m-5 flex max-h-screen w-[14.5rem] flex-col items-center justify-between overflow-hidden rounded-xl bg-gray-700 pb-6 pt-12">
      <div className="flex flex-col gap-16">
        <div className="flex gap-2">
          <Image src={bookwiseLogo} alt="Bookwise Logo" />
          <h1 className="text-transparent bg-clip-text text-xl text-gradient-100">
            BookWise
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base text-gray-400">
          <span className="flex gap-3 hover:text-gray-100">
            <Image src={startIcon} alt="Start Icon" />
            Start
          </span>
          <span className="flex gap-3 hover:text-gray-100">
            <Image src={exploreIcon} alt="Explore Icon" />
            Explore
          </span>
          <span className="flex gap-3 hover:text-gray-100">
            <Image src={profileIcon} alt="Explore Icon" />
            Profile
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 px-3">
        <UserButton />
        <span className="text-sm text-gray-100">{user?.fullName}</span>
      </div>
    </header>
  );
}
