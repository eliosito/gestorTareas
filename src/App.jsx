import { useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Formulario from './componentes/Formulario'
import Modal from './componentes/Modal'


  let tareasDefault = [
    {    titulo: "Limpiar cocina",descripcion:`Completar los ejercicios de matemáticas del cuaderno, páginas 32 a 35.Resolver los problemas de álgebra y revisar las respuestas con la guía.Preparar un resumen escrito de al menos media página para entregar mañana.` ,categoria: "Hogar",estado:"Pendiente",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Alta",selecionado: false},
    {    titulo: "Hacer tarea",descripcion:"Lavar todos los platos y vasos que estén en la pileta.Pasar un trapo húmedo con desinfectante por la mesada y la mesa.Barrer el piso y, si es necesario, pasar el trapo con agua y detergente." ,categoria:"Colegio",estado:"En proceso",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Media",selecionado: false},
    {    titulo: "Leer libro",descripcion:"Leer el libro Cien años de soledad de Gabriel García Márquez.Avanzar desde la página 45 hasta la página 70.Tomar notas de los personajes principales que aparecen en ese tramo." ,categoria: "Colegio",estado:"Finalizado",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Baja",selecionado: false},

  ]

function App() {

  const [tareas, setTareas] = useState(tareasDefault)

  const [abierto,setAbierto] = useState(false)

  const eliminarSeleccionadas = () => {
    const tareasActualizadas = tareas.filter(tarea => !tarea.selecionado)
    setTareas(tareasActualizadas)
  }

  const guardar = (tarea) => {

    console.log(tarea);
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea)

    setTareas(nuevasTareas)
  }



  console.log({tareas})

  return (
    <>



    <Modal
    abierto={abierto}
    cerrar={() => setAbierto(false)}
    >

      <Formulario
      guardar={(tarea) => guardar(tarea)}
      />


    </Modal>

    <Contenedor
    tareas={tareas}
    setTareas={setTareas}
    eliminar={eliminarSeleccionadas}
    onAbrirFormulario={() => setAbierto(true)} 
    

    />

    </>
  )
}

export default App
