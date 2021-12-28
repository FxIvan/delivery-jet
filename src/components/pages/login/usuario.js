import React, { useEffect } from 'react'
import Cookies from 'universal-cookie/es6'
import './usuario.css'

export const Usuario = () => {
  const cookies = new Cookies()

  const usuario = cookies.get('usuario')
  const apellido = cookies.get('apellido')
  const rol = cookies.get('rol')
  const pais = cookies.get('pais')

  const handleCerrar = () => {
    cookies.remove('usuario', { path: '/' })
    window.location.href = '/'
  }

  useEffect(() => {
    if (!cookies.get('usuario')) {
      window.location.href = '/'
    }
  })

  return (
    <div className="container mt-5 usuario-container">
      <div className='col-12 d-flex justify-content-end'>
        <button type="button" className="btn btn-danger" onClick={handleCerrar}>
          Cerrar Sesion
        </button>
      </div>
      <div className="text-center mt-5">
        <div>
          <h2>Bievenido {usuario}</h2>
        </div>

        <div className="mt-5">
          <span> Tus Datos </span>
          <h3>Nombre: {usuario}</h3>
          <h3>Apellido: {apellido}</h3>
        </div>

        <div className="mt-5">
          <span>Eres de:</span>
          <h3>{pais}</h3>
        </div>

        <div className="mt-5"> 
          <span>Ademas eres:</span>
          <h3>{rol}</h3>
        </div>
      </div>
    </div>
  )
}
