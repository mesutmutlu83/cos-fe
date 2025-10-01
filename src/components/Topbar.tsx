export default function Topbar(){
  const logout = ()=>{ localStorage.clear(); location.href='/login' }
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-4">
      <div className="font-medium">Dashboard</div>
      <button className="btn-primary" onClick={logout}>Çıkış</button>
    </div>
  )
}
