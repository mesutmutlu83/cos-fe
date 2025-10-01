import { NavLink } from 'react-router-dom'

const Item = ({ to, label }: any) => (
  <NavLink to={to} className={({isActive}) => 
    `block px-4 py-2 rounded-lg mb-1 ${isActive?'bg-slate-200':'hover:bg-slate-100'}`}>
    {label}
  </NavLink>
)

export default function Sidebar(){
  return (
    <aside className="p-4 border-r bg-white">
      <div className="text-xl font-semibold mb-4">Selfuel COS</div>
      <div className="text-slate-500 text-xs mb-2">Yönetim</div>
      <Item to="/admin/tenant" label="Tenant Ayarları" />
      <Item to="/admin/users" label="Kullanıcılar" />
      <div className="text-slate-500 text-xs mt-4 mb-2">Organizasyon</div>
      <Item to="/org/setup" label="Org Setup" />
    </aside>
  )
}
