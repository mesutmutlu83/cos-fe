import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }: any){
  return (
    <div className="min-h-screen grid grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="bg-slate-50">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
