import { TLabelProps } from "@/types/component/props";

export default function Label(props: TLabelProps) {
  const { required = false, children, ...restProps } = props;
  return (
    <>
      <label {...restProps}>
        {children} {required && <span className="text-main-600">*</span>}
      </label>
    </>
  );
}
