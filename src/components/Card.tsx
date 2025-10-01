export default function Card({ title, children, extra }: any){
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">{title}</div>
        {extra}
      </div>
      {children}
    </div>
  )
}
