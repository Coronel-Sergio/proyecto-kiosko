const express = require("express")

const router = express.Router()

const {allEmpleados,singleEmpleados,createEmpleados,editEmpleados,eraseEmpleados} = require("../controllers/Empleados")

router.get("/Empleados",allEmpleados);
router.get("/Empleados/:id",singleEmpleados);
router.post("/Empleados/crear",createEmpleados);
router.put("/Empleados/editar/:id",editEmpleados);
router.delete("/Empleados/eliminar/:id",eraseEmpleados);


module.exports = router
