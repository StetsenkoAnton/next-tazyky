'use client'
import Image from "next/image";
import shareImg from "@/assets/share-alt.svg";

export default function BtnShare({ title = "", text = "" }) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: window.location.href,
      })
    } else alert("no share")
  }
  return (
    <button
      type="button"
      className="inline-flex gap-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleShare}
    >
      <Image src={shareImg} alt="img" width={20} height={20} />
      Поділитися
    </button>
)
}
