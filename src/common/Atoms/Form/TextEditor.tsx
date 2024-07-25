import { ReactQuillProps } from "react-quill";
import QuillNoSSR from "./QuillNoSSR";

// type TEditorProps = Partial<React.ComponentProps<"textarea">>;
type TEditorProps = ReactQuillProps;
export default function TextEditor(props: TEditorProps) {
  return (
    <div className="editor w-full">
      <QuillNoSSR forwardedRef={null} {...props} />
    </div>
  );
}
