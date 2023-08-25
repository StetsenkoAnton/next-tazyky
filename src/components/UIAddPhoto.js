'use client'

import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user",
};
export default function UIAddPhoto({ label, notate }) {
  const webcamRef = React.useRef(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      console.log(navigator.mediaDevices);
      if (navigator.mediaDevices.enumerateDevices) navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
    <div className="col-span-full">
      <h5 className="block text-sm font-medium leading-6 text-gray-900">{label}</h5>
      {notate && <p className="text-gray-500 text-sm">{notate}</p>}
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        {devices.map((device, key) => (
          <div key={key}>
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
            {device.label || `Device ${key + 1}`}
          </div>

        ))}
      </div>
    </div>
)
}
