import {
  BellRingIcon,
  BuildingIcon,
  BulbIcon,
  FileEditIcon,
  KeyboardIcon,
  MonitorPlayIcon,
  NotebookIcon,
  OfflineIcon,
  OnlineIcon,
  PuzzleIcon,
  TIconStylingProps,
} from "@/common/Atoms/Image/Icon";

export const categoryIconsName = [
  "Notebook",
  "Keyboard",
  "Bulb",
  "FileEdit",
  "Building",
  "BellRing",
  "MonitorPlay",
  "Puzzle",
];

export const onOffIconsName = ["OfflineIcon", "OnlineIcon"];

const CATEGORY_ICONS: any = {
  Notebook: NotebookIcon,
  Keyboard: KeyboardIcon,
  Bulb: BulbIcon,
  FileEdit: FileEditIcon,
  Building: BuildingIcon,
  BellRing: BellRingIcon,
  MonitorPlay: MonitorPlayIcon,
  Puzzle: PuzzleIcon,
  Offline: OfflineIcon,
  Online: OnlineIcon,
};

export function CategoryTabIcon({
  name,
  ...restProps
}: { name: string } & TIconStylingProps) {
  const key = name.replace("Icon", "");
  const Component = CATEGORY_ICONS[key];
  if (Component) {
    return <Component {...restProps} />;
  }
  throw new Error(
    "CategoryIcon 컴포넌트는 Notebook(Icon), Keyboard(Icon), Bulb(Icon), FileEdit(Icon), Building(Icon), BellRing(Icon), MonitorPlay(Icon), Puzzle(Icon), Online(Icon), Offline(Icon) 중 하나를 name으로 가져야합니다"
  );
}
