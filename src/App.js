import logo from './logo.svg';
import "./styles/styles.scss";
import Curso from './curso'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Q9KoSr9h5mu88x_tEX2cN0VyJAgsQ2W8jw&usqp=CAU"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de React</p>
          <p> Vamos venciendo</p>
          <a href="#" className="button">Entrar</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
    <Curso />
  </div>  
  </>
)
 
export default App;


// Reglas
// 1: Toda etiqueta debe cerrarse
// 2: los componentes deben devolver un solo elemento padre
// 3: Apoyarse en los fragment cuando necesito devolver 2 elemntos
// 4: fragment o <> </>
// 5: img simepre se cierra
// 6: en react se usa className y no class
// 7: for en jsx es htmlFor

