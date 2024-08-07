import { ReactQuillProps } from "react-quill";
import QuillNoSSR from "./QuillNoSSR";
import { Suspense } from "react";
import Skeleton from "../Skeleton";

// type TEditorProps = Partial<React.ComponentProps<"textarea">>;
type TEditorProps = ReactQuillProps;
export default function TextEditor(props: TEditorProps) {
  return (
    // <Suspense fallback={<Skeleton className="w-full h-96 rounded-ten" />}>
    <div className="editor w-full flex-1">
      <QuillNoSSR forwardedRef={null} {...props} />
    </div>
    // </Suspense>
  );
}
