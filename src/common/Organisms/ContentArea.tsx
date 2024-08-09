import style from "./customContent.module.css";

export default function ContentArea({ html }: { html: string }) {
  return (
    <div
      className={style.postBody}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}
