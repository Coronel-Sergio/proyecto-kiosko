const express = require("express");
const app = express();
const cors = require('cors');
const port = 8000;

const productosRouter = require("./routes/productos");
const loginRouter = require("./routes/login");
const proveedoresRouter = require("./routes/proovedores")
const clientes = require("./routes/clientes");
const ventas = require("./routes/ventas");
const categorias = require("./routes/categorias")
const Empleados = require("./routes/Empleados")
const pedidos = require("./routes/pedidos")


app.use(cors());
app.use(express.json());
app.use("/",Empleados)
app.use('/', productosRouter);
app.use("/",clientes)
app.use("/", ventas);
app.use('/', loginRouter)
app.use("/", categorias)
app.use('/', proveedoresRouter)
app.use('/', pedidos)



app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto:"+port)
});

