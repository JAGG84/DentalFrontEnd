import Card2 from '../components/Card2.jsx'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';


const Herramientas = () => {
    const { auth } = useAuth()
    const navigate = useNavigate()

    if(auth.permisos === "Empleado" || auth.permisos === "Supervisor"){
        navigate('/reenbolsos');
      }

    return (
        <>

            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-black">Herramientas</h1>
                </div>
            </div>
           
            <div className="flex flex-wrap">
           
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pt-10">
                <Link
                    to="/registrar"
                    className='font-bold uppercase'
                >
                    <Card2 
                    title="Crear cuenta" 
                    text="En este apartado podrás administrar las cuentas de usuario de el sistema." 
                    image="../../public/add-users.png" 
                    />
                    </Link>
                </div>
            </div>


        </>
    );
};

export default Herramientas;
