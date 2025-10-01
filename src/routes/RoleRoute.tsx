import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

export default function RoleRoute({ roles, children }: any){
  // Geçici olarak rol kontrolünü kaldırdık
  return children;
  
  // const [ok, setOk] = useState(false)
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (!token) return setOk(false)
  //   const payload: any = jwtDecode(token)
  //   setOk(roles.includes(payload.role))
  // }, [roles])
  // if (!ok) return <div className="p-8">Yetkin yok.</div>
  // return children
}
