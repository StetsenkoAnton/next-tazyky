"use client"

import { useLayoutEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { updateRtDbData } from "@/firebase/rtDb";
import { CAR_EMPTY } from "@/constants";

export default function CreatePage() {
  useLayoutEffect(() => {
    const id = Date.now();
    const initData = {...CAR_EMPTY};
    initData.id = id;
    updateRtDbData(id, initData).then();
    redirect(`/create/${id}`)
  }, [])

  return null
}
