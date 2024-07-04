import clsx from "clsx";

type TKeywordProps = {
  bg: string;
  text: string;
  className?: string;
  children: string;
};
export default function Keyword(props: TKeywordProps) {
  const { bg, text, className, children } = props;
  return (
    <span
      className={clsx([
        bg,
        text,
        "rounded-full px-4 py-2 text-caption",
        className,
      ])}
    >
      {children}
    </span>
  );
}
