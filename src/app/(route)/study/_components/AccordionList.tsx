export default function AccordionList({
  lists,
  isOpen,
}: {
  lists: string[];
  isOpen: boolean;
}) {
  console.log("list", lists);

  return (
    <ul className={`${isOpen ? "flex " : "hidden"} flex-col gap-12 pt-6 pb-16`}>
      {lists.map((list, i) => {
        return (
          <li key={i + 1} className="flex items-center gap-4">
            <span className="py-[3px] px-3 w-9 h-9 border-2 border-neutral-500 rounded-full font-semibold text-neutral-500">
              {i + 1}
            </span>
            <p className="text-lg font-semibold text-neutral-500">{list}</p>
          </li>
        );
      })}
    </ul>
  );
}
