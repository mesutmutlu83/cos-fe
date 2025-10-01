import Card from '../../components/Card'
import api from '../../lib/api'
import { useForm } from 'react-hook-form'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function UsersPage(){
  const qc = useQueryClient()
  // Mock data ile başlayalım
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'ADMIN', orgScope: '/Company A/Growth' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'CEO', orgScope: null },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'TEAM_LEAD', orgScope: '/Company A/Growth/Team Alpha' }
  ];

  const { data = mockUsers } = useQuery({ 
    queryKey: ['users'], 
    queryFn: async () => (await api.get('/users')).data,
    enabled: false // API hazır olmadığı için query'yi devre dışı bırak
  })
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (f:any)=>{
    try {
      // API çağrısını şimdilik atlayalım
      console.log('Yeni kullanıcı:', f);
      alert('Kullanıcı eklendi (mock)');
      reset();
    } catch (error) {
      console.error('Hata:', error);
      alert('Kullanıcı eklenirken hata oluştu');
    }
  }
  return (
    <div className="grid gap-4">
      <Card title="Kullanıcı Ekle">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
          <div><div className="label">Ad</div><input className="input" {...register('name')} /></div>
          <div><div className="label">E-posta</div><input className="input" {...register('email')} /></div>
          <div>
            <div className="label">Rol</div>
            <select className="input" {...register('role')}>
              <option value="ADMIN">ADMIN</option>
              <option value="CEO">CEO</option>
              <option value="STRATEGY_MANAGER">STRATEGY_MANAGER</option>
              <option value="TEAM_LEAD">TEAM_LEAD</option>
              <option value="CONTRIBUTOR">CONTRIBUTOR</option>
            </select>
          </div>
          <div><div className="label">Org Scope</div><input className="input" placeholder="/Company A/Growth/Team Alpha" {...register('orgScope')} /></div>
          <div className="col-span-2"><button className="btn-primary">Kaydet</button></div>
        </form>
      </Card>
      <Card title="Kullanıcılar">
        <table className="w-full">
          <thead><tr className="text-left"><th>İsim</th><th>E-posta</th><th>Rol</th><th>Scope</th></tr></thead>
          <tbody>
            {data?.map((u:any)=>(
              <tr key={u.id} className="border-t">
                <td className="py-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.orgScope || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
