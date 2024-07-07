import React from "react";
import { TProps } from "@/types/component/props";

export default function SidebarNavArea({ children }: TProps) {
  return <ul className="flex flex-col gap-1">{children}</ul>;
}
