import { useMemo, useState } from "react"
               
export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([2,3,4,5])
    const [Show, setShow] = useState(true)

    const getCalculo = (listaNumero)=> useMemo(()=>{
      console.log('Calculando')
      return listaNumero.reduce((a,b) => a*b)
      },[listaNumeros])

    const agregarNumero =() =>{
      setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1]+1 ]) 
     }
     

  return (
    <> 
    <h1>Calculo:</h1>
    <p>{getCalculo(listaNumeros)}</p>
    <button className="btn btn-primary" onClick={() =>setShow(!Show)}> {Show ? 'Show': 'Hide'}</button>
    <button className="btn btn-primary" onClick={()=> agregarNumero()}>Agregar Numero</button>
    </>
  )
}
