import Link from "next/link";
import Image from 'next/image'

export default function PageHeader({ children }) {
  return (
    <nav className="bg-gray-800 mb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center">
            <Link className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" href="/create">Create</Link>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" width={50} height={50} alt="Your Company" />
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
