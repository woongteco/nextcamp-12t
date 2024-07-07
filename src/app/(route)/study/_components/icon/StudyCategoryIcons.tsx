"use client";

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

export const STUDYCATEGORYICONS = [
  (props: TIconStylingProps) => <NotebookIcon {...props} />,
  (props: TIconStylingProps) => <KeyboardIcon {...props} />,
  (props: TIconStylingProps) => <BulbIcon {...props} />,
  (props: TIconStylingProps) => <FileEditIcon {...props} />,
  (props: TIconStylingProps) => <BuildingIcon {...props} />,
  (props: TIconStylingProps) => <BellRingIcon {...props} />,
  (props: TIconStylingProps) => <MonitorPlayIcon {...props} />,
  (props: TIconStylingProps) => <PuzzleIcon {...props} />,
];

export const ONOFFICONS = [
  (props: TIconStylingProps) => <OfflineIcon {...props} />,
  (props: TIconStylingProps) => <OnlineIcon {...props} />,
];
