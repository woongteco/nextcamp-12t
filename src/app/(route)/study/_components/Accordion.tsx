import AccordionList from "./AccordionList";
import AccordionTitle from "./AccordionTitle";

export type TAccordionList = { accordionId: number; content: string };

export default function Accordion({
  title,
  contentList,
}: {
  title: string;
  contentList: TAccordionList[];
}) {
  return (
    <div className="border-b">
      <AccordionTitle title={title} />
      <AccordionList contentList={contentList} />
    </div>
  );
}
