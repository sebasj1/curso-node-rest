const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  // puedo pasar parametros y desestructurarlos
  const { q, name, limit = 10 } = req.query;
  res.json({
    msg: "GET - api",
    q,
    name,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;
  res.json({
    msg: "Post - api",
    body,
  });
};
const usuariosPut = (req, res = response) => {
  res.json({
    msg: "Put - api",
  });
};
const usuariosDel = (req, res = response) => {
  res.json({
    msg: "Delete - api",
  });
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDel };
