"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import PageHeader from "@/components/PageHeader";
import UiInput from "@/components/UiInput";
import {getDbCollection, getDbData} from "@/firebase/db";
import {useEffect, useState} from "react";

export default function Home() {
  const router = useRouter();
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    getDbCollection("cars")
      .then((cars) => {
        console.log(cars);
        setCarList(cars);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])
  return (
    <main className="min-h-screen">
      <PageHeader>
        <UiInput placeholder="Пошук" />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Оглянуті автівки</h2>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
          {carList.map(car => (
            <li
              className="group relative"
              key={car.id} onClick={() => router.push(`car/${car.id}`)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {!!car?.images?.length && (
                  <Image
                    src={car.images[0]}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={220}
                    height={300}
                  />
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-sm font-bold capitalize">{car.name}</h3>
                <span className="text-sm">{car.engineVolume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">{car.price}</span>
                <span className="text-sm font-medium text-gray-500">{car.year}р.</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
