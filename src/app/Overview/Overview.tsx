"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import CircularProgressWithLabel from "@/components/ui/Progress/Circular/CircularProgressWithLabel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import React from "react";

const Overview = () => {
  return (
    <section className="px-7 py-2">
      <div>
        <div>
          <Card className="bg-black border-zinc-300 text-white max-w-64">
            <CardHeader>
              <span className="font-medium">Running Tasks</span>
            </CardHeader>
            <CardContent className="flex items-center gap-4 ">
              <div>
                <span>
                  <span className="text-3xl">65 / 100</span>
                </span>
                <p>this week</p>
              </div>
              <div>
                <CircularProgressWithLabel
                  value={65}
                  size={75}
                  thickness={2.5}
                  circleColor="#546FFF"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex">
              <p>Activity</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="week">This week</SelectItem>
                    <SelectItem value="month">This month</SelectItem>
                    <SelectItem value="year">This year</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;
