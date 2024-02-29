"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  aschild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  aschild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClicked = () => {
    router.push("/auth/login");
    console.log("login clicked");
  };

  if (mode == "model") {
    return <span>Implement model</span>;
  }

  return (
    <span onClick={onClicked} className="cursor-pointer">
      {children}
    </span>
  );
};
