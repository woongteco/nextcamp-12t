import { TLabelProps, TLabelTextProps } from "@/types/component/props";
import clsx from "clsx";

export function LabelText(props: TLabelTextProps) {
  const {
    required = false,
    form = false,
    className,
    children,
    ...restProps
  } = props;
  return (
    <p
      {...restProps}
      className={clsx(className, [form && "text-label-form leading-[56px]"])}
    >
      {children} {required && <span className="text-main-600">*</span>}
    </p>
  );
}

export default function Label(props: TLabelProps) {
  const { required, form, className, children, ...restProps } = props;
  return (
    <label {...restProps} className={clsx(className, "")}>
      <LabelText required={required} form={form}>
        {children}
      </LabelText>
    </label>
  );
}
