import GridField from "@/common/Atoms/Form/Field";
import { TProps } from "@/types/component/props";

export default function SidebarAsideContentArea({ children }: TProps) {
  return (
    <div className="py-16">
      <GridField>{children}</GridField>
    </div>
  );
}
