import toast, { Toast } from "react-hot-toast";
import Notification from "@/common/Molecules/Notification";

let toastId: string | null = null;

function activeToast(
  type: "success" | "error" | "loading",
  content?: string,
  message?: string
) {
  return toast.custom(
    (t: Toast) => (
      <Notification
        t={t}
        status={type}
        message={{
          title: content,
          text: message,
        }}
      />
    ),
    toastId ? { id: toastId } : undefined
  );
}

export default function handleAlert(
  type: "success" | "error" | "loading",
  content?: string
) {
  if (toastId) {
    activeToast(type, content);
  } else {
    toastId = activeToast(type, content);
  }
}
