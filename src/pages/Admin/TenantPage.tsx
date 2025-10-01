import Card from '../../components/Card'
import api from '../../lib/api'
import { useQuery } from '@tanstack/react-query'

export default function TenantPage(){
  // Mock tenant data
  const mockTenants = [
    { 
      id: 1, 
      name: 'Company A', 
      plan: 'Enterprise',
      createdAt: '2023-01-15T10:00:00Z'
    },
    { 
      id: 2, 
      name: 'Company B', 
      plan: 'Professional',
      createdAt: '2023-03-20T14:30:00Z'
    },
    { 
      id: 3, 
      name: 'Company C', 
      plan: 'Standard',
      createdAt: '2023-06-05T09:15:00Z'
    }
  ];

  const { data = mockTenants } = useQuery({ 
    queryKey: ['tenants'], 
    queryFn: async () => (await api.get('/tenants')).data,
    enabled: false // API hazır olmadığı için query'yi devre dışı bırak
  })
  return (
    <div className="grid gap-4">
      <Card title="Tenantlar">
        <table className="w-full">
          <thead><tr className="text-left"><th>Ad</th><th>Plan</th><th>Oluşturma</th></tr></thead>
          <tbody>
            {data?.map((t:any)=>(
              <tr key={t.id} className="border-t">
                <td className="py-2">{t.name}</td>
                <td>{t.plan}</td>
                <td>{new Date(t.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
