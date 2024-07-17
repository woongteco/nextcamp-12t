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
import { FunctionComponent } from "react";

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

  switch (name) {
    case "Notebook":
    case "NotebookIcon":
      return <NotebookIcon {...restProps} />;
    case "Keyboard":
    case "KeyboardIcon":
      return <KeyboardIcon {...restProps} />;
    case "Bulb":
    case "BulbIcon":
      return <BulbIcon {...restProps} />;
    case "FileEdit":
    case "FileEditIcon":
      return <FileEditIcon {...restProps} />;
    case "Building":
    case "BuildingIcon":
      return <BuildingIcon {...restProps} />;
    case "BellRing":
    case "BellRingIcon":
      return <BellRingIcon {...restProps} />;
    case "MonitorPlay":
    case "MonitorPlayIcon":
      return <MonitorPlayIcon {...restProps} />;
    case "Puzzle":
    case "PuzzleIcon":
      return <PuzzleIcon {...restProps} />;
    case "Offline":
    case "OfflineIcon":
      return <OfflineIcon {...restProps} />;
    case "Online":
    case "OnlineIcon":
      return <OnlineIcon {...restProps} />;
  }
  throw new Error(
    "CategoryIcon 컴포넌트는 Notebook(Icon), Keyboard(Icon), Bulb(Icon), FileEdit(Icon), Building(Icon), BellRing(Icon), MonitorPlay(Icon), Puzzle(Icon), Online(Icon), Offline(Icon) 중 하나를 name으로 가져야합니다"
  );
}
