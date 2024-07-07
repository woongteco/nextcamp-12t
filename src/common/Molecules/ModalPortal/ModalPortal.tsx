import ModalBackdrop from "./ModalBackdrop";
import ModalLayer from "./ModalLayer";
import { TModalPortalProps } from "@/types/component/props";

export default function ModalPortal(props: TModalPortalProps) {
  return (
    <>
      <ModalBackdrop></ModalBackdrop>
      <ModalLayer {...props} />
    </>
  );
}
