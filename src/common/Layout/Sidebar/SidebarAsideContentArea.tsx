import GridField from "@/common/Atoms/Form/Field";
import { TProps } from "@/types/component/props";

export default function SidebarAsideContentArea({ children }: TProps) {
  return (
    <div data-name="sidebar-layout__content">
      <GridField>{children}</GridField>
    </div>
  );
}
