import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import { LuBell, LuMoon, LuSun } from "react-icons/lu";
import { Switch } from "./ui/Switch";

const Header = () => {
  return (
    <header className="border-b-2 border-zinc-100 bg-header">
      <div className="p-7">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">My Board</h1>
          <div className="flex items-center gap-4 text-secondaryTextColor">
            <div className="flex items-center border-r-2 text-center pe-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center">
                    <button>
                      <LuBell size={20} className="hover:text-black" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Visualizar notificações</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-2">
              <LuSun size={20} />
              <Switch />
              <LuMoon size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
