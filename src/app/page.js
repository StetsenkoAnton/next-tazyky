import { getDbCollection } from "@/firebase/db";
import PageHeader from "@/components/PageHeader";
import ViewedCar from "@/components/ViewedCar";
import Link from "next/link";

export default async function Home() {
  const carList = await getDbCollection("cars");
  return (
    <main className="min-h-screen">
      <PageHeader >
        <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" href="/create">Почати огляд</Link>
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
