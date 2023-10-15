import { useReducer } from 'react'
import {useForm} from '../hooks/useForm'

const initialState =[{
    id: new Date().getTime(),
    tarea:'Esplicar reducers',
    finalizada: false
}]

const tareaReducer = ( state = initialState, action ={}) =>{
switch (action.type) {
    case '[TAREAS] Agregar tarea':
        return [...state, action.payload]
    case '[TAREAS] Finalizar tarea':
        return state.map( tarea =>{
            if(tarea.id === action.payload){
                return {
                    ...tarea,
                    finalizada: !tarea.finalizada
                } 
            }return tarea
        })
    case '[TAREAS] Eliminal tarea':
        return state.filter(tarea => tarea.id !== action.payload)

    case '[TAREAS] Borrar tarea':
        return []
    default:
        return state
}

}



export const ListaTareas = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
    const {tarea,fontState, onInputChange,} = useForm({tarea:''})

    const agregarTarea = (event) =>{
        event.preventDefault()
        if(fontState.tarea == '') return
        const tarea = {
            id: new Date().getTime(),
            tarea: fontState.tarea,
            finalizada: false
        }
        console.log(tarea)
        const action = {
            type:'[TAREAS] Agregar tarea',
            payload: tarea
        }
        dispatch(action)
    }


    const finalizarTarea = ({id}) =>{
    
        const action = {
            type:'[TAREAS] Finalizada tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea=({id})=>{
        const action = {
            type:'[TAREAS] Eliminal tarea',
            payload: id
        }
        dispatch(action)
    }

    const reset = () =>{
        const action ={
            type: '[TAREAS] Borrar tarea',
            payload: ''
        }
        dispatch(action)
    }


  return (
    <>
    <form onSubmit={agregarTarea}>
  <div className="mb-3">  
    <input 
        type="text" 
        className="form-control" 
        name="tarea"  
        placeholder="Ingresa Tarea"
        value={tarea}
        onChange={onInputChange}
    />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
</form>

    <hr />

    <ul className="list-group">
        {
            tareasState.map(item =>{
                return(
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>{item.tarea}</span>
                     

                        <div>

                        <input 
                        type="checkbox"
                        value={item.finalizada}
                        onChange={()=>finalizarTarea(item)}
                        />

                        <button 
                        className='btn btn-danger'
                        onClick={() => eliminarTarea(item)}
                        >
                        Borrar
                        </button>
                        </div>
                    </li>
                )
            })
        }
    </ul>
    </>
  )
}
