"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backButtonLable: string;
  backButtonHref: string;
  showsocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLable,
  backButtonLable,
  backButtonHref,
  showsocial,
}: CardWrapperProps) => {
  return (
    <Card className="sm:w-[400px] w-[250px] shadow-md ">
      <CardHeader>
        <Header label={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showsocial && <CardFooter><Social/></CardFooter>}
    </Card>
  );
};
