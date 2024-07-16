export default function AuthWrap({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div
      className={`w-96 flex flex-col gap-5 items-center rounded-lg border border-gray-200 bg-white shadow-lg center ${
        style ? style : "px-6 py-10"
      }`}
    >
      {children}
    </div>
  );
}
