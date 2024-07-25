import clsx from "clsx";

type TKeywordProps = React.ComponentProps<"span"> & {
  bg?: string;

  text: string;
  children: any;
};
export default function Keyword(props: TKeywordProps) {
  const { bg, text, className, children } = props;
  return (
    <span
      className={clsx([
        bg,
        text,
        "rounded-full px-3 py-2 text-caption",
        className,
      ])}
    >
      {children}
    </span>
  );
}
