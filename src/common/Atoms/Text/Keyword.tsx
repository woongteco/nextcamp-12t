type TKeywordProps = {
  bg: string;
  text: string;
  style?: string;
  children: string;
};
export default function Keyword(props: TKeywordProps) {
  const { bg, text, style = null, children } = props;
  return (
    <span className={`${bg} ${text} rounded-full px-4 py-2 ${style}`}>
      {children}
    </span>
  );
}
