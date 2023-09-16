'use client'
export default function UiTextArea({ label, value = "", onInput = (string) => {}, }) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900 w-full">
      <p className="mb-2">{label}</p>
      <textarea
        rows="3"
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={value}
        onChange={(e) => onInput(e.target.value)}
      />
    </label>

)
}
