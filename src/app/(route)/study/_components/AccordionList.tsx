import { TAccordionList } from "./AccordionComponent";

export default function AccordionList({
  lists,
  isOpen,
}: {
  lists: TAccordionList[];
  isOpen: boolean;
}) {
  return (
    <ul
      className={`${
        isOpen === true ? "flex " : "hidden"
      } flex-col gap-12 pt-6 pb-16`}
    >
      {lists.map((list) => {
        return (
          <li key={list.listId} className="flex items-center gap-4">
            <span className="py-[3px] px-3 w-9 h-9 border-2 border-neutral-500 rounded-full font-semibold text-neutral-500">
              {list.listId}
            </span>
            <p className="text-lg font-semibold text-neutral-500">
              {list.content}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
