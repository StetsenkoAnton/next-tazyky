import UiInput from "@/components/UiInput";
import UiCheckbox from "@/components/UiCheckbox";

export default function UiInfoRow21({ children = [] }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-12">
      <div className="sm:col-span-8 sm:col-start-1">
        {children[0]}
      </div>
      <div className="sm:col-span-4">
        {children[1]}
      </div>
    </div>
  )
}
