export default function Input(props: React.ComponentProps<"input">) {
  return (
    <>
      <input {...props} />
    </>
  );
}

/**
 * @props type [text, number, date-range, checkbox, radio, image-file, password, email]
 */
