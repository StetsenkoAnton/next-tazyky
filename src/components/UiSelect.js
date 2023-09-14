'use client'

export default function UiSelect({
  label,
  value = "",
  onInput = (string) => {},
  optionList = [],
  required = false,
}) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label && <span className="mb-2">{label}</span>}
      <div className="relative mt-2 rounded-md shadow-sm">
        <select
          required={required}
          value={value}
          onChange={(e) => onInput(e.target.value)}
          className={`py-1.5 ps-2 pe-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        >
          <option value="" disabled>--Не вибрано--</option>
          {optionList.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
      </div>
    </label>
  )
}
