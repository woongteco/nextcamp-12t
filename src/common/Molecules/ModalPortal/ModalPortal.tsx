import ModalBackdrop from "./ModalBackdrop";
import ModalLayer from "./ModalLayer";
import { TModalPortalProps } from "@/types/component/props";

export default function ModalPortal(
  props: TModalPortalProps<HTMLButtonElement | HTMLDivElement>
) {
  return (
    <>
      <ModalBackdrop
        onClick={props.canClose ? props.onClose : undefined}
      ></ModalBackdrop>
      <ModalLayer {...props} />
    </>
  );
}
