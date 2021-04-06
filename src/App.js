import "./styles/styles.scss";
import Curso from './curso'

const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 50,
    "profesor": "Beto Quiroga"
  },
  {
    "titulo": "Drupal desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/5ec26692-8451-4297-a59a-adb1829a90e8.jpg",
    "price": 40,
    "profesor": "ramon snachez"
  },
  {
    "titulo": "Go desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/cd6b19fb-bfcb-4197-bf68-4fd2ab7f37e2.png",
    "price": 30,
    "profesor": "juan clavo"
  },
  {
    "titulo": "Html desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": 20,
    "profesor": "sergio boch"
  }
]

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
    {
      cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor}  />)
    }
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

