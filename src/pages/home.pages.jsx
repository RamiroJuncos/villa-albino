<<<<<<< HEAD
<<<<<<< HEAD
=======
import Carrousel1 from "../components/CarrouselFotos";
>>>>>>> cbe5d73e7bf5e7a70c90d2f42837096d468884ca
=======
>>>>>>> master
import Contacto from "../components/Contacto";
import Header from "../components/Header";
import Noticias from "../components/Noticias";
import PieDePagina from "../components/PiePagina";
import ProximosPartidos from "../components/ProximosPartidos";
import TituloPrincipal from "../components/TituloPrincipal";
import UltimosResultados from "../components/UltimosResultados";
import Fondo from "../assets/Foto-Fondo.jpg"

function Home() {
    return (
        <div>
             <div className=""
         style={{backgroundImage: `url(${Fondo})`}}>
            <Header />
            <TituloPrincipal/>
            <UltimosResultados />
            <ProximosPartidos />
            <Noticias/>
            <Contacto />
            <PieDePagina />
        </div>
        </div>
    );
}

export default Home;

