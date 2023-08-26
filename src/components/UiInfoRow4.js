export default function UiInfoRow4({ children = [] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
      <div className="sm:col-span-3 sm:col-start-1">
        {children[0]}
      </div>
      <div className="sm:col-span-3">
        {children[1]}
      </div>
      <div className="sm:col-span-3">
        {children[2]}
      </div>
      <div className="sm:col-span-3">
        {children[3]}
      </div>
    </div>
  )
}
