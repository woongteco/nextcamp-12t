export default function AuthWrap({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div
      className={`w-96 flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow-lg center ${
        style ? style : "gap-5 px-6 py-10"
      }`}
    >
      {children}
    </div>
  );
}
