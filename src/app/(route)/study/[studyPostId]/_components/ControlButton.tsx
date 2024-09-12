"use client";

import { useSession } from "next-auth/react";
import DeleteButton from "./DeleteButton";
import RetouchButton from "./RetouchButton";
import { StudyDataFull } from "@/types/model/StudyCard";

export default function ControlButton({ study }: { study: StudyDataFull }) {
  const { data: session } = useSession();

  if (session?.user.id === study.writer._id) {
    return (
      <div className="flex gap-5 text-slate-600">
        <RetouchButton studyId={study.studyId} />
        <DeleteButton studyId={study.studyId} />
      </div>
    );
  }
}
