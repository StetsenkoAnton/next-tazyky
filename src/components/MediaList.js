'use client'

import video from "@/assets/film.svg";

export default function MediaList({
  mediaPaths = [],
}) {
  return (
    <ul className="my-4">
      {mediaPaths.map((fileName) => (
        <li key={fileName.path}>
          {fileName.type === "image"
            ? (
              <img
                className="w-full mb-1"
                src={fileName.path}
                alt="img"
                loading={fileName?.lazy ?? "lazy"}
                fetchPriority={fileName.fetchpriority}
              />)
            : (
              <video className="w-full mb-1" src={fileName.path} controls>
                <source src={fileName.path} type={fileName.type} />
              </video>)
          }
        </li>
      ))}
    </ul>
  )
}
