export default function UiInfoSection({ children, title }) {
  return (
    <section className="border-b border-gray-900/10 pb-8 mb-8">
      <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
      {children}
    </section>
  )
}
