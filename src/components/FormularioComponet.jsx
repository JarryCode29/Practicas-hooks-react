
import { useEffect, useRef } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioComponet = () => {
  const focusRef = useRef()
  console.log(focusRef)
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
  
    const {fontState,userName,email,password, onInputChange }=useForm(initialForm)


    const onSubmit= (event)=>{
        event.preventDefault()
        console.log(fontState)
    }

   useEffect(() => {
    focusRef.current.focus()
   }, [])
   
  return (
    <form onSubmit={onSubmit} >
    <div className="form-group">
      <label htmlFor="userName">Email address</label>

      <input type="userName"
       className="form-control" 
      name="userName"  
      placeholder="Enter you username"
      value={userName}
      onChange={onInputChange}
      />
     
      
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
      ref={focusRef}
      type="email" 
      className="form-control" 
      name="email" 
      placeholder="Enter email"
      value={email}
      onChange={onInputChange}
      />
      
      
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password"
       className="form-control"
       name="password" 
      placeholder="Password"
      value={password}
      onChange={onInputChange}
      />
      
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
