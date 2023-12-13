import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';  
import { Banner } from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Quienes } from './Components/Quienes';
import { Mision } from './Components/Mision';
import { Vision } from './Components/Vision';
import { Valores } from './Components/Valores';
import { Juguetes } from './Components/Juguetes';
import { Ofertas } from './Components/Ofertas';
import { Socios } from './Components/Socios';
import { Contactos } from './Components/Contactos';
import { Credito } from './Components/Credito';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Quienes/>
      <Mision/>
      <Vision/>
      <Valores/>
      <Juguetes/>
      <Ofertas/>
      <Socios/>
      <Contactos/>
      <Credito/>
    </div>
  );
}
export default App;
