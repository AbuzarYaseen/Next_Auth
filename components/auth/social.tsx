"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full items-center md:flex-row gap-x-4">
      <Button
        className="gap-x-4 w-full"
        size="lg"
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" /> <span>Google</span>
      </Button>
      <Button
        className="gap-x-4 w-full"
        size="lg"
        variant={"outline"}
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" /> <span>GitHub</span>
      </Button>
    </div>
  );
};
