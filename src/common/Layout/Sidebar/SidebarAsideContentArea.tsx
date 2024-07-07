import GridField from "@/common/Atoms/Form/Field";
import { TProps } from "@/types/component/props";

export default function SidebarAsideContentArea({ children }: TProps) {
  return (
    <div className="mt-20">
      <GridField>{children}</GridField>
    </div>
  );
}
