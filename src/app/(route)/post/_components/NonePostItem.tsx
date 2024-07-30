import NoneContentItemBase from "@/app/_components/NoneContentItemBase";

export default function NonePostItem() {
  return (
    <NoneContentItemBase>
      <p className="text-label-dimmed font-semibold">
        조건에 맞는 글이 존재하지 않습니다.
      </p>
    </NoneContentItemBase>
  );
}
