export type TButtonProps = React.ComponentProps<"button"> & {
  type: "solid" | "outline";
};
export type TNavItemProps = React.ComponentProps<"li"> & { active: boolean };
