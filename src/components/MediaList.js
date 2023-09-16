'use client'

import Image from "next/image";
import video from "@/assets/film.svg";

export default function MediaList({
  mediaPaths = [],
}) {
  return (
    <ul className="mb-4">
      {mediaPaths.map((fileName) => (
        <li key={fileName.path}>
          {fileName.type === "image"
            ? <img className="w-full" src={fileName.path} alt="img" />
            : (
              <video className="w-full" src={fileName.path} controls>
                <source src={fileName.path} type={fileName.type} />
              </video>)
          }
        </li>
      ))}
    </ul>
  )
}
