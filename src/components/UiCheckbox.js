'use client'
export default function UiCheckbox({ id, label, notate, value = "", onInput = (string) => {}, }) {
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          id={id}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          value={value}
          onChange={(e) => onInput(e.target.checked)}
        />
      </div>
      <div className="text-sm leading-6">
        <label htmlFor={id} className="font-medium text-gray-900">{label}</label>
        {notate && <p className="text-gray-500">{notate}</p>}
      </div>
    </div>
)
}
