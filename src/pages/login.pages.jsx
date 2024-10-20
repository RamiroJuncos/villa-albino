import Logo from "../assets/Logo-Club.png";
import StyledButton from "../components/StyledButton"
import StyledInput from "../components/StyledInput"


function Login() {
<<<<<<< HEAD
=======
    const [nombre, setNombre] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Para el registro
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            
            const response = await fetch("http://localhost:3001/login", {
                
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, password }),
                
            });

            const data = await response.json();
            console.log( data)

            if (data.success) {
                navigate('/home');
            } else {
                setError('Nombre o contraseña incorrectos');
            }
        } catch (err) {
            console.error("Error en el inicio de sesión", err);
            setError('Hubo un problema con el inicio de sesión');
        }
    }; 

    const handleRegister = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, email, password }),
            });
            const data = await response.json();

            if (data.success) {
                navigate('/home');
            } else {
                setError('Error en el registro');
            }
        } catch (err) {
            console.error("Error en el registro", err);
            setError('Hubo un problema con el registro');
        }
    };

>>>>>>> main
    return (
        <div className="hero bg-green-700 min-h-screen">
            <div className="hero-content text-center flex flex-col">
                <img src={Logo} alt="" className="w-44 block drop-shadow-xl" />
                <form className="max-w-md" type="submit">
                    <StyledInput placeholder={"Ingrese su DNI"} BRLabel={"Sin puntos"} textColor={"text-white"}/>
                    <StyledInput placeholder={"Ingrese su contraseña"} BRLabel={"Olvide mi Contraseña"} type="password" textColor={"text-white"}/>
                    <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
                </form>
            </div>
        </div>
    );
}

export default Login;