"use client";

import React from "react";

import { LuSearch } from "react-icons/lu";
import { Avatar, AvatarGroup } from "@mui/material";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const Board = () => {
  return (
    <section className="bg-body">
      <div className="p-7">
        <BoardHeader />
        <h1>hello</h1>
      </div>
    </section>
  );
};

const BoardHeader = () => {
  return (
    <section className="flex items-center gap-6 justify-between mb-7">
      <div className="flex gap-6 items-center justify-between">
        <span>
          Created on: <span className="font-semibold">May 13, 2022</span>
        </span>
        <div className="flex gap-2 items-center justify-between">
          <span>Team:</span>
          <AvatarGroup spacing={8}>
            <Avatar
              alt="teste"
              src="https://pbs.twimg.com/profile_images/1621330831078735878/2BU6vvmP_400x400.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="teste"
              src="https://i.pinimg.com/564x/b3/a1/1d/b3a11d950b8b1ee3ccc98354c2cdb9b5.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="teste"
              src="https://i.pinimg.com/736x/ce/36/36/ce3636aa4e013aea7ee7b7efd7b70aed.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              sx={{
                bgcolor: "gray",
                width: 30,
                height: 30,
                fontSize: "15px",
              }}
            >
              +4
            </Avatar>
          </AvatarGroup>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Input
            placeholder="Search for a task"
            className="rounded-r-none w-72 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button className="rounded-l-none">
            <LuSearch size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Board;
