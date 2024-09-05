export type TAlertItem = {
  type: "post" | "study";
  typeId: string;
  title: string;
  comments: {
    _id: string;
    comment: string;
    read: boolean;
  }[];
};

export type TAlert = {
  alertList: TAlertItem[];
  allRead: boolean;
};