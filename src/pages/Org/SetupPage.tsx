import Card from '../../components/Card'
import api from '../../lib/api'
import { useForm } from 'react-hook-form'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export default function SetupPage(){
  const qc = useQueryClient()
  // Mock organization tree data
  const mockOrgTree = [
    {
      id: 1,
      name: 'Company A',
      type: 'COMPANY',
      path: '/Company A',
      parentId: null
    },
    {
      id: 2,
      name: 'Growth Division',
      type: 'DIVISION',
      path: '/Company A/Growth',
      parentId: 1
    },
    {
      id: 3,
      name: 'Team Alpha',
      type: 'TEAM',
      path: '/Company A/Growth/Team Alpha',
      parentId: 2
    },
    {
      id: 4,
      name: 'Team Beta',
      type: 'TEAM',
      path: '/Company A/Growth/Team Beta',
      parentId: 2
    }
  ];

  const { data = mockOrgTree } = useQuery({ 
    queryKey: ['orgTree'], 
    queryFn: async () => (await api.get('/org/tree')).data,
    enabled: false // API hazır olmadığı için query'yi devre dışı bırak
  })
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (f:any)=>{
    try {
      // API çağrısını şimdilik atlayalım
      console.log('Yeni org node:', f);
      alert('Organizasyon node\'u eklendi (mock)');
      reset();
    } catch (error) {
      console.error('Hata:', error);
      alert('Organizasyon node\'u eklenirken hata oluştu');
    }
  }
  return (
    <div className="grid gap-4">
      <Card title="Org Node Ekle">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-3">
          <div><div className="label">Ad</div><input className="input" {...register('name')} /></div>
          <div>
            <div className="label">Tip</div>
            <select className="input" {...register('type')}>
              <option value="COMPANY">COMPANY</option>
              <option value="DIVISION">DIVISION</option>
              <option value="TEAM">TEAM</option>
            </select>
          </div>
          <div><div className="label">Path</div><input className="input" placeholder="/Company A/Growth/Team Beta" {...register('path')} /></div>
          <div><div className="label">Parent Id</div><input className="input" {...register('parentId')} /></div>
          <div className="col-span-4"><button className="btn-primary">Ekle</button></div>
        </form>
      </Card>
      <Card title="Org Ağacı">
        <table className="w-full">
          <thead><tr className="text-left"><th>Ad</th><th>Tip</th><th>Path</th><th>Parent</th></tr></thead>
          <tbody>
            {data?.map((o:any)=>(
              <tr key={o.id} className="border-t">
                <td className="py-2">{o.name}</td>
                <td>{o.type}</td>
                <td>{o.path}</td>
                <td>{o.parentId || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
