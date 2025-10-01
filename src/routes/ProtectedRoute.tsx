import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../lib/auth'
export default function ProtectedRoute({ children }: any){
  // Geçici olarak authentication kontrolünü kaldırdık
  return children;
  // return isLoggedIn() ? children : <Navigate to="/login" replace />;
}
