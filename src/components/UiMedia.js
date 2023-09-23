'use client'
import { useState } from "react";

import { deleteMedia, uploadMedia } from "@/firebase/fireStorage";
import Image from "next/image";
import img from "@/assets/image.svg"
import video from "@/assets/film.svg"
import files from "@/assets/cloud-upload.svg"
import UiLoader from "@/components/UiLoader";

export default function UiMedia({
  label,
  notate = "",
  value = [],
  onInput = () => {},
  required = false,
  carId = "",
  noVideo = false,
  noImage = false,
}) {
  const [isLoad, setIsLoad] = useState(false);
  function handleLoad(e) {
    const uploadList = [];
    setIsLoad(true);
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const isIncludeFile = value.map((media) => media.name).includes(file.name);
      if (!isIncludeFile) uploadList.push(uploadMedia(carId, file.name, file));
    }
    Promise.all(uploadList)
      .then((pathArr) => {
        onInput([...value, ...pathArr]);
      })
      .finally(() => {
        setIsLoad(false);
      })
  }
  function onDeleteMedia(fileInfo) {
    deleteMedia(carId, fileInfo.name)
      .then(() => {
        const newList = value.filter((media) => media.name !== fileInfo.name);
        onInput(newList);
      })
  }
  return (
    <div className="block text-sm font-medium leading-6 text-gray-900">
      {label && <div>
        <h5 className="block text-sm font-medium leading-6 text-gray-900">{label}</h5>
        {notate && <p className="text-gray-500 text-sm">{notate}</p>}
      </div>}
      {isLoad
        ? <div className="relative mt-2 flex justify-center w-full text-gray-900 sm:text-sm sm:leading-6"><UiLoader /></div>
        : (
          <div className="relative mt-2 flex gap-2 w-full text-gray-900 sm:text-sm sm:leading-6">
            {!noImage && <label className="flex-1 flex gap-2 justify-center items-center rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
              <Image src={img} alt="img" width={40} height={40} />
              Фото
              <input
                required={required}
                type="file"
                capture="camera"
                accept="image/jpeg"
                onChange={handleLoad}
                className="hidden"
              />
            </label>}
            {!noVideo && <label className="flex-1 flex gap-2 justify-center items-center rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
              <Image src={video} alt="img" width={40} height={40} />
              Відео
              <input
                required={required}
                type="file"
                capture="camera"
                accept="video/*"
                onChange={handleLoad}
                className="hidden"
              />
            </label>}
            <label className="flex-1 flex gap-2 justify-center items-center rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
              <Image src={files} alt="img" width={40} height={40} />
              Upload
              <input
                required={required}
                type="file"
                accept={`${noImage ? 'video/*' : 'image/jpeg,video/*'}`}
                multiple
                onChange={handleLoad}
                className="hidden"
              />
            </label>
          </div>
        )}
      <ul className="flex gap-2 pt-2">
        {value.map((fileName) => (
          <li className="relative" key={fileName.path}>
            {fileName.type === "image"
              ? <Image src={fileName.path} alt="img" width={80} height={60} quality={20}/>
              : <video src={fileName.path} width={80} height={60} />
            }
            <button
              className="absolute top-0 right-0 bg-black text-white rounded-full px-2"
              type="button"
              onClick={() => onDeleteMedia(fileName)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
