import Link from "next/link";
import Image from 'next/image'
import shareImg from "@/assets/logo-transparent-240.png";

export default function PageHeader({ children }) {
  return (
    <nav className="bg-gray-800 mb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center">

          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center text-white">
              <Link href="/">
                <Image src={shareImg} alt="img" width={50} height={50} />
              </Link>
            </div>
          </div>
          <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            { children }
          </div>
        </div>
      </div>
    </nav>
)
}
