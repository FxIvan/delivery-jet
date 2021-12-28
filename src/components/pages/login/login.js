import React, { useState, useEffect } from 'react'
import axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie/es6'
import './usuario.css'

export const Login = () => {
  const url = 'http://localhost:3002/usuarios'
  const cookie = new Cookies()

  const [form, setForm] = useState({
    usuario: '',
    clave: '',
  })
  const [incorrect, setIncorrect] = useState(false)

  const handleSubmit = () => {
    console.log('Funciona')
    axios
      .get(url, { params: { usuario: form.usuario, clave: md5(form.clave) } })

      .then((resp) => {
        return resp.data
      })
      .then((resp) => {
        if (resp.length > 0) {
          const respuesta = resp[0]
          cookie.set('usuario', respuesta.usuario, { path: '/' })
          cookie.set('apellido', respuesta.apellido, { path: '/' })
          cookie.set('rol', respuesta.rol, { path: '/' })
          cookie.set('pais', respuesta.pais, { path: '/' })
          console.log('Bievenido')
          window.location.href = '/usuario'
          setIncorrect(false)
        } else {
          setIncorrect(true)
        }
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (cookie.get('usuario')) {
      window.location.href = '/usuario'
    }
  }, [])

  return (
    <div className="login-container">
      <div className="text-center">
        <div>
          <h2>Iniciar Sesion</h2>
        </div>
        <div className="col-2 m-auto">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tu usuario"
            name="usuario"
            onChange={handleChange}
          />
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="tu contraseña"
            name="clave"
            onChange={handleChange}
          />
          <div className="mt-2">
            {incorrect ? (
              <p className="fw-bold badge bg-warning text-dark">
                Contraseña Incorrecta
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 btn btn-success"
          >
            Entrar
          </button>
        </div>
      </div>

      <div className="container">
        <h3>usuarios para probar</h3>
        <div className='mt-3'>
          <p>
            usuario: <span className="fw-bold">conrado</span>
          </p>
          <p>
            clave: <span className="fw-bold">2542</span>
          </p>
        </div>
        <div className='mt-3'>
        <p> 
          usuario: <span className="fw-bold">ivan</span>
        </p>
        <p>
          clave: <span className="fw-bold">2541</span>
        </p>
      </div>
      <p>Si estas dentro de la sesion debera cerrarla ya que si no la cierra no podra salir de la sesion</p>
      </div>
    </div>
  )
}
