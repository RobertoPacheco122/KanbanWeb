"use client";

import React from "react";
import { LuInbox, LuClock, LuLayout, LuPlus } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Skeleton } from "./ui/Skeleton";
import { VscSettings } from "react-icons/vsc";

const Aside = () => {
  return (
    <aside className="w-72 bg-aside border-r-2 border-zinc-100">
      <div className="p-7 text-secondaryTextColor">
        <div className="mb-1">
          <div className="flex gap-3 items-center">
            <Avatar className="h-11 w-11 border-2">
              <AvatarImage src="/images/guaxinim.jpg" />
              <AvatarFallback>
                <Skeleton className="h-11 w-11 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div>
              <span className="font-semibold text-primaryTextColor block">
                Roberto Pacheco
              </span>
              <span className="text-xs">Front-End Developer</span>
            </div>
          </div>
          <div></div>
        </div>
        <nav className="flex flex-col border-b-2 py-4 text-tertiaryTextColor">
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <LuInbox size={20} />
            Inbox
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <LuClock size={20} />
            Updates
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <VscSettings size={20} />
            Settings
          </a>
        </nav>
        <nav className="flex flex-col border-b-2 py-4 text-tertiaryTextColor">
          <div className="mb-2">
            <span>Boards</span>
          </div>
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <LuLayout size={20} />
            My Board
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <LuLayout size={20} />
            Board teste
          </a>
          <a
            href="#"
            className="flex gap-2 items-center hover:bg-zinc-200 hover:text-black p-2 rounded-xl"
          >
            <LuLayout size={20} />
            Testing
          </a>
          <button className="p-2 flex items-center gap-2 hover:bg-zinc-200 hover:text-black rounded-xl">
            <LuPlus size={20} color="#44baff" />
            Add new Board
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
