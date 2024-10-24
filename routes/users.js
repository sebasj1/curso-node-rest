const { Router } = require("express"); //desestructura una funcion de express
const {
  usuariosGet,
  usuariosPost,
  usuariosDel,
  usuariosPut,
} = require("../controllers/usuarios");
const router = Router();

router.get("/", usuariosGet);
router.put("/", usuariosPut);
router.delete("/", usuariosDel);
router.post("/", usuariosPost);

module.exports = router;
