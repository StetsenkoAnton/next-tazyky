import Link from "next/link";
import Image from 'next/image'
import shareImg from "@/assets/logo-transparent-240.png";

export default function PageHeader({ children, leftSide }) {
  return (
    <nav className="bg-gray-800 mb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-12 h-16 items-center">
          <div className="col-span-5 flex items-center">
            { leftSide }
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <Link href="/">
              <Image src={shareImg} alt="img" width={50} height={50} />
            </Link>
          </div>
          <div className="col-span-5 flex items-center justify-end">
            { children }
          </div>
        </div>
      </div>
    </nav>
)
}
