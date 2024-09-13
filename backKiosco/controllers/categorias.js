const { connection } = require("../config/DB");



//FUNCION LISTAR
const listarcategorias = (req, res) => {
  const query = "SELECT * FROM Categorias";
  console.log(query);

  connection.query(query, (err, resultados) => {
    if (err) throw err;
    res.json(resultados);
  });
};




//FUNCION EDITAR
const editarcategoria = (req, res) => {
  const id = req.params.id;
  const { Nombre_Categoria, Descripcion} = req.body;

  const query = `UPDATE Categorias SET Nombre_Categoria='${Nombre_Categoria}',Descripcion='${Descripcion}'  where id_categoria=${id} `;

  connection.query(query, (err) => {
    if (err) {
      console.error("Error al actualizar los datos: ", err);
      res.status(500).send("Error del servidor");
    } else {
      res.status(200).send("Categoría actualizada exitosamente");
    }
  });
};



//FUNCION ELIMINAR
const eliminarcategoria = (req, res) => {
  const id= req.params.id;
  const query = `delete from Categorias where id_categoria=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error al actualizar los datos ", err);
      res.status(500).send("error del servidor");
    } else {
      res.status(200).send("Categoria eliminada correctamente");
    }
  });
};



//FUNCION CREAR
const crearcategoria = (req, res) => {
  const { Nombre_Categoria, Descripcion, Imagen } = req.body;

  const query = `INSERT INTO Categorias (Nombre_Categoria, Descripcion, Imagen) VALUES ('${Nombre_Categoria}' , '${Descripcion}' , '${Imagen}') `;

  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error al insertar los datos: ", err);
      res.status(500).send("Error del servidor");
    } else {
      res.status(200).send("Categoría creada exitosamente");
    }
  });
};

module.exports = {
  listarcategorias,
  editarcategoria,
  eliminarcategoria,
  crearcategoria,
};




