import QuillNoSSR from "./QuillNoSSR";

type TEditorProps = Partial<React.ComponentProps<"textarea">>;
export default function TextEditor(props: TEditorProps) {
  return (
    <div className="editor">
      <QuillNoSSR {...props} />
    </div>
  );
}
