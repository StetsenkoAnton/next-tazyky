"use client"

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { setDbData } from "@/firebase/db";
import { getRtDbData, updateRtDbData } from "@/firebase/rtDb";
import { getUiCarData } from "@/services/getUiCarData";
import { CAR_EMPTY } from "@/constants";
import PageHeader from "@/components/PageHeader";
import CreateSectionMain from "@/components/CreateSectionMain";
import CreateSectionBody from "@/components/CreateSectionBody";
import CreateSectionBodyInner from "@/components/CreateSectionBodyInner";
import CreateSectionBodyTechnic from "@/components/CreateSectionBodyTechnic";
import CreateSectionEngineCold from "@/components/CreateSectionEngineCold";
import CreateSectionEngineStart from "@/components/CreateSectionEngineStart";
import CreateSectionEngineHot from "@/components/CreateSectionEngineHot";
import CreateSectionDrive from "@/components/CreateSectionDrive";
import CreateSectionOther from "@/components/CreateSectionOther";
import BtnShare from "@/components/BtnShare";


export default function CreatePage() {
  const router = useRouter();
  const params = useParams();
  const carId = params.id;
  const [car, setCar] = useState(CAR_EMPTY);

  useEffect(() => {
    const unsubscribe = getRtDbData(carId,(d) => {
      if (!d || JSON.stringify(car) === JSON.stringify(d)) return;
      setCar(d)
    })
    return () => {
      unsubscribe();
    };
  }, []);

  function updateCarKey(key, value) {
    const cloneCar = {...car};
    if (!car.id) cloneCar.id = params.id;
    cloneCar[key] = value;
    updateRtDbData(carId, cloneCar).then();
  }

  function onSubmit(e) {
    e.preventDefault();
    const uiCar = getUiCarData(car);
    setDbData("cars", carId, uiCar).then(() => {
      router.push(`/car/${carId}`)
    });
  }
  return (
    <main className="min-h-screen pb-6">
      <PageHeader>
        <BtnShare title="Огляд" />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit}>
          <CreateSectionMain car={car} updateCarKey={updateCarKey} />
          <CreateSectionBody car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionBodyTechnic car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionEngineCold car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionEngineStart car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionBodyInner car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionDrive car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionEngineHot car={car} carId={carId} updateCarKey={updateCarKey} />
          <CreateSectionOther car={car} carId={carId} updateCarKey={updateCarKey} />
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Видалити</button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSubmit}
            >
              Зберегти та перейти до огляду
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
