"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { getDbCollection } from "@/firebase/db";
import PageHeader from "@/components/PageHeader";
import UiInput from "@/components/UiInput";
import ViewedCar from "@/components/ViewedCar";


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
              key={car.id}
            >
              <ViewedCar car={car} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
