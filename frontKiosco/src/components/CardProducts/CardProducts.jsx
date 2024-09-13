const CardProducts = ({ Nombre_Producto, Descripcion, Precio, Stock, imagen }) => {
  return (
    <div className="col-2">
      <div className="card">
        <img src={`${imagen}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{Nombre_Producto}</h4>
          <div className="card-text d-flex flex-column gap-1">
            <p>{Descripcion}</p>
            <span><span className="fw-bold">Precio:</span> ${Precio}</span>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProducts