'use client'

export default function UiInput({
  label,
  type = "text",
  placeholder,
  value = "",
  onInput = (string) => {},
  valueSelect = "",
  onSelect = (string) => {},
  afterSelect = [],
  dataList = [],
  dataListName = "",
  required = false,
}) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label && <span className="mb-2">{label}</span>}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          required={required}
          list={dataListName}
          type={type}
          value={value}
          onChange={(e) => onInput(e.target.value)}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 ps-2 pe-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {!!afterSelect.length && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <select
              value={valueSelect}
              onChange={(e) => onSelect(e.target.value)}
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              {afterSelect.map(data => (
                <option key={data} value={data}>{data}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      {!!dataList.length && (
        <datalist id={dataListName}>
          {dataList.map(data => (
            <option key={data} value={data} />
          ))}
        </datalist>
      )}
    </label>
  )
}
