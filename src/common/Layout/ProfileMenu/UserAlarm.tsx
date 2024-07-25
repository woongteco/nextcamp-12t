import Image from "next/image";
import { AlarmIcon } from "@public/icons";

export default function UserAlarm() {
  return (
    <>
      <div className="pl-4">
        <Image src={AlarmIcon} alt="alarm" />
      </div>
    </>
  );
}
