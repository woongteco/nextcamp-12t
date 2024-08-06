import { TProps } from "@/types/component/props";

function Group({ children }: TProps) {
  return (
    <div className="flex flex-row gap-5 items-center h-full">{children}</div>
  );
}

function RadioButton(
  props: React.ComponentProps<"input"> & {
    id: string;
    label: string;
    defaultChecked?: boolean;
  }
) {
  const { id, label, defaultChecked = false, ...restProps } = props;
  return (
    <>
      <input
        {...restProps}
        type="radio"
        id={id}
        defaultChecked={defaultChecked}
        className="invisible w-0 h-0 absolute [&:checked+label]:bg-black [&:checked+label]:text-white"
      />
      <label
        htmlFor={id}
        className="border border-black/35 text-black/35 rounded-full px-[27px] py-2 cursor-pointer"
      >
        {label}
      </label>
    </>
  );
}

function CheckboxButton(
  props: React.ComponentProps<"input"> & { label: string }
) {
  const { label, type, ...restProps } = props;
  return (
    <>
      <input
        type="checkbox"
        className="hidden [&:checked+label]:border-black [&:checked+label]:text-black"
        {...restProps}
      />
      <label
        htmlFor="location-off"
        className="border border-black/35 text-black/35 rounded-full px-[27px] py-2"
      >
        {label}
      </label>
    </>
  );
}

export default Object.assign(Group, {
  Radio: RadioButton,
  Checkbox: CheckboxButton,
});
