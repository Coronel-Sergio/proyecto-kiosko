const { connection } = require('../config/DB')

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const queryLogin = `select * from Login WHERE username = "${username}"`
  connection.query(queryLogin, (err, results) => {
    console.log(results)

    if (results.length === 0) {
      return res.status(404).send({
        message: 'Usuario inexistente'
      })
    }

    const user = results[0];

    
    if (user) {
      if (user.passwrd === password) {
        res.json({ message: "Login Exitoso",
          user: {
            username: user.username,
            rol: user.rol
          }
         })
      } else {
        return res.status(401).send("Usuario o contraseña incorrectos",)
      }
        
    }
  })

  
}


module.exports = { loginUser }