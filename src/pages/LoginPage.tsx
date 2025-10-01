import { useForm } from 'react-hook-form'
import api from '../lib/api'
import { setAuth } from '../lib/auth'

export default function LoginPage(){
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data:any)=>{
    try {
      // Test amaçlı mock token
      const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6IkFETUlOIiwidGVuYW50SWQiOiJ0ZXN0LXRlbmFudCIsImlhdCI6MTUxNjIzOTAyMn0.4Vx2Zh3GH6feVXS4v4L3Zz4C4Dvz3NPz3S3u2wkDiNA";
      setAuth(mockToken, 'test-tenant');
      location.href = '/';
    } catch (error) {
      console.error('Login error:', error);
      alert('Login hatası');
    }
  }
  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="card w-[360px] space-y-3">
        <div className="text-2xl font-semibold">Giriş</div>
        <div>
          <div className="label">E-posta</div>
          <input className="input" {...register('email')} defaultValue="ceo@selfuel.test"/>
        </div>
        <div>
          <div className="label">Şifre</div>
          <input className="input" type="password" {...register('password')} defaultValue="Dev12345!"/>
        </div>
        <button className="btn-primary w-full">Giriş</button>
      </form>
    </div>
  )
}
