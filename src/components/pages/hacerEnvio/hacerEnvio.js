import React from 'react'

export const HacerEnvio = () => {

    const enviarFormulario = () =>{

    }

  return (
    <div className='text-center contaier'>
    <div className=''>
      <div>
        <h2>Hacer un Envio</h2>
      </div>
      <div className='w-50 m-auto'>
        <form onSubmit={()=>enviarFormulario}>
          <label for="formControlInput" class="form-label">
            Nombre y Apellido
          </label>
          <input type="text" class="form-control" id="formControlInput" placeholder="Nombre y Apellido"></input>
          <label for="formControlInput" class="form-label">Direccion Emisor</label>
          <input type="text" class="form-control" id="formControlInput" placeholder="Tu Direccion"></input>
          <label for="formControlInput" class="form-label">Direccion Receptor</label>
          <input type="text" class="form-control" id="formControlInput" placeholder="Direccion a enviar"></input>
          <label for="formControlInput" class="form-label">Peso</label>
          <input type="number" class="form-control" id="formControlInput" placeholder="Peso del paquete"></input>
          <label> Zona del Receptor</label>
          <select class="form-select" aria-label="Default select">
            <option selected="">Zona a Enviar</option>
            <option value="1">Zona Sur</option>
            <option value="2">CABA</option>
            <option value="3">Norte</option>
          </select>
          <button type="submit" class="btn btn-outline-success mt-3">Enviar</button>
        </form>
      </div>
      </div>

      <div>
      <p>Usar en caso de que el servicio que quiere no este en el pack, nosotros le pasaremos la cotizacion por email</p>
      </div>
    </div>
  )
}
