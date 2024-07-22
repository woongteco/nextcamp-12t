import toast, { Toast } from "react-hot-toast";
import Notification from "@/common/Molecules/Notification";

export default function handleAlert(
  type: "success" | "error",
  content: string
) {
  toast.custom((t: Toast) => (
    <Notification
      t={t}
      status={type}
      message={{
        title: content,
      }}
    />
  ));
}
