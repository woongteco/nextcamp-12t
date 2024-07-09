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
  const { className, ...restProps } = props;
  return (
    <>
      <textarea
        className={clsx("h-[60px] w-full resize-none", inputStyle, className)}
        {...restProps}
      />
    </>
  );
}

export function Checkbox({
  className,
  ...restProps
}: Omit<TInputElementProps, "hidden">) {
  return (
    <div className={className}>
      <input
        type="checkbox"
        hidden
        {...restProps}
        className="[&+.icon>.unchecked]:block [&:checked+.icon>.unchecked]:hidden [&+.icon>.checked]:hidden [&:checked+.icon>.checked]:block"
      />
      <div className="icon">
        <span className="checked">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
              fill="#2A7FFE"
            />
            <path
              d="M16.0003 9L10.667 15L8 12M3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4796 3 19.9074 3.21799C20.2837 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8036C21 18.9215 21 19.4805 20.7822 19.9079C20.5905 20.2842 20.2837 20.5905 19.9074 20.7822C19.48 21 18.921 21 17.8031 21H6.19691C5.07899 21 4.5192 21 4.0918 20.7822C3.71547 20.5905 3.40973 20.2842 3.21799 19.9079C3 19.4801 3 18.9203 3 17.8002Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
              stroke="#2A7FFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="unchecked">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.4805 21 18.9215 21 17.8036V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
              stroke="#C7C8C9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function Radio({
  className,
  ...restProps
}: Omit<TInputElementProps, "hidden">) {
  return (
    <div className={className}>
      <input
        type="radio"
        hidden
        {...restProps}
        className="[&+.icon>.unchecked]:block [&:checked+.icon>.unchecked]:hidden [&+.icon>.checked]:hidden [&:checked+.icon>.checked]:block"
      />
      <div className="icon">
        <span className="checked">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
              fill="#2A7FFE"
              stroke="#2A7FFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
              stroke="#2A7FFE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="unchecked">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
              stroke="#C7C8C9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

/**
 * @props type {
 *  input-origin: [text, number, password, email, textarea, checkbox, radio],
 *  from libs: [select, date-range]
 * }
 */
