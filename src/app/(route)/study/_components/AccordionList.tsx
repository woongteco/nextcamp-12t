type TAccodion = {
  accordionId: number;
  content: string;
};

export default function AccordionList({
  CONTENTLIST,
}: {
  CONTENTLIST: TAccodion[];
}) {
  return (
    <ul className="flex flex-col gap-12 pt-6 pb-16">
      {CONTENTLIST.map((list) => {
        return (
          <li key={list.accordionId} className="flex items-center gap-4">
            <span className="py-[3px] px-3 w-9 h-9 border-2 border-neutral-500 rounded-full font-semibold text-neutral-500">
              {list.accordionId}
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
