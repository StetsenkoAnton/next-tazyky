'use client'

import UiInfoRow from "@/components/UiInfoRow";
import {uploadMedia} from "@/firebase/fireStorage";
import {useState} from "react";

export default function UiMedia({
  label,
  placeholder,
  value = "",
  onInput = (string) => {},
  notate = "",
  required = false,
  carId = "",
}) {
  let mediaCounter = 0;
  const [uploadedList, setUpload] = useState([]);
  function handleLoad(e) {
    console.log(e);
    console.log(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const fileNamePath = `${file.name}`;
      const [fileName, fileExt] = fileNamePath.split('.');
      mediaCounter += 1;
      uploadMedia(carId, `${label}-${mediaCounter}.${fileExt}`, file)
        .then((fileName) => {
          setUpload([...uploadedList, fileName])
        })
        .catch((err) => {
          console.error(err);
        })
    }
    // e.target.files.forEach((file) => {
    //
    // })
    // type, name, size

  }
  return (
    <div className="block text-sm font-medium leading-6 text-gray-900">
      {label && <div>
        <h5 className="block text-sm font-medium leading-6 text-gray-900">{label}</h5>
        {notate && <p className="text-gray-500 text-sm">{notate}</p>}
      </div>}
      <div className="relative mt-2 block w-full text-gray-900 sm:text-sm sm:leading-6">
        <label className="rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          Зробити фото
          <input
            required={required}
            type="file"
            capture="camera"
            accept="image/*"
            onChange={handleLoad}
            placeholder={placeholder}
            // className="invisible"
          />
        </label>
        <label className="rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          Зробити відео
          <input
            required={required}
            type="file"
            capture="camera"
            accept="video/*"
            onChange={handleLoad}
            placeholder={placeholder}
            // className="invisible"
          />
        </label>
        <label className="rounded-md shadow-sm py-1.5 px-2 border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          Завантажити фото
          <input
            required={required}
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleLoad}
            placeholder={placeholder}
            // className="invisible"
          />
        </label>
      </div>
      <ul>
        {uploadedList.map((fileName) => (
          <li key={fileName}>{fileName}</li>
        ))}
      </ul>
    </div>
  )
}
