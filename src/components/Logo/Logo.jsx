import { useNavigate } from 'react-router-dom'; 
import './Logo.css'; 

export default function Logo() {

  const navigate = useNavigate(); 

  return (
    <div className="logo" onClick={() => navigate('/products')}>
          Norstor
    </div>
  )
}