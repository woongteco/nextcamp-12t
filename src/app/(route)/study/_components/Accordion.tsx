import AccordionList from "./AccordionList";
import AccordionTitle from "./AccordionTitle";

export type TAccordionList = { accordionId: number; content: string };

export default function Accordion({
  title,
  lists,
}: {
  title: string;
  lists: TAccordionList[];
}) {
  return (
    <div className="border-b">
      <AccordionTitle title={title} />
      <AccordionList lists={lists} />
    </div>
  );
}
