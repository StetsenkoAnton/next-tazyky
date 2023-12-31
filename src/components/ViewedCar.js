import Image from "next/image";
import Link from "next/link";
import MediaList from "@/components/MediaList";

export default function ViewedCar({ car }) {
  return (
    <Link href={`car/${car.id}`}>
      <div
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
        style={{height: "300px"}}
      >
        {!!car.imgBody && (
          <Image
            src={car.imgBody[0].path}
            alt="car"
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
    </Link>
  )
}
