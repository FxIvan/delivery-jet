import React from 'react'
import './itemCount.css'

export const ItemCount = ({ stock, clicks, setClicks, onAdd }) => {
  const restarClick = () => {
    clicks > 0 && setClicks(clicks - 1)
  }

  const sumarClick = () => {
    stock > clicks && setClicks(clicks + 1)
  }

  return (
      <div>
        <div className="row d-flex justify-content-evenly">
          <h2>{clicks}</h2>

          <div className="row text-center m-auto button-count">
            <div className="col-5">
              <button
                className="btn btn-outline-success"
                onClick={sumarClick}
                type="button"
              >
                +
              </button>
            </div>

            <div className="col-5">
              <button
                className="col-5 btn btn-outline-success"
                onClick={restarClick}
                type="button"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="text-center button-agregar mt-3">
          <button className=" btn btn-dark" onClick={onAdd}>
            Agregar
          </button>
        </div>
        {/**********************************************************/}
      </div>

  )
}
