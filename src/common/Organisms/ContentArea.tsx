import style from "./customContent.module.css";

const lorem = `<h1>새 글</h1><h2>Heading 2</h2><h3><a href="google.com" rel="noopener noreferrer" target="_blank">subtitle</a></h3><p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.</strong></p><p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.</em></p><p class="ql-align-center"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.</u></p><p class="ql-align-right"><s>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.</s></p><p><br></p><p class="ql-align-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit quos eos deserunt dolore quisquam perferendis, perspiciatis voluptas ea modi illum voluptate repellendus iusto explicabo quo soluta assumenda nostrum accusantium.</p>`;

export default function ContentArea({ html }: { html: string }) {
  return (
    <div
      className={style.postBody}
      dangerouslySetInnerHTML={{ __html: html || lorem }}
    />
  );
}
