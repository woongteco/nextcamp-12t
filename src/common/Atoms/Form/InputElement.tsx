import clsx from "clsx";
import { inputStyle } from "../atomStyle";

type TInputElementProps = React.ComponentProps<"input">;
function InputElement({ className, ...restProps }: TInputElementProps) {
  return <input className={clsx(inputStyle, className)} {...restProps} />;
}

export function Text(props: TInputElementProps) {
  return (
    <>
      <InputElement type="text" {...props} />
    </>
  );
}

export function Number(props: TInputElementProps) {
  return (
    <>
      <InputElement type="number" {...props} />
    </>
  );
}

export function Email(props: TInputElementProps) {
  return (
    <>
      <InputElement type="email" {...props} />
    </>
  );
}

export function Password(props: TInputElementProps) {
  return (
    <>
      <InputElement type="password" {...props} />
    </>
  );
}

export function Textarea(props: React.ComponentProps<"textarea">) {
  return (
    <>
      <textarea className={clsx("h-[60px] w-full", inputStyle)} {...props} />
    </>
  );
}

export function Checkbox(props: TInputElementProps) {
  return (
    <>
      <InputElement type="checkbox" {...props} />
    </>
  );
}

export function Radio(props: TInputElementProps) {
  return (
    <>
      <InputElement type="radio" {...props} />
    </>
  );
}

/**
 * @props type {
 *  input-origin: [text, number, password, email, textarea, checkbox, radio],
 *  from libs: [select, date-range]
 * }
 */
