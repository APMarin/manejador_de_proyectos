const express=require("express")
function getUsers(req, res, next) {
  res.send('Lista de trabajadores');
}
function getUser(req, res, next) {
  const id=req.params.id;
  res.send('Un solo trabajador con id: '+id);
}
function create(req, res, next) {
  const name=req.body.name;
  const lastName=req.body.lastName;
  res.send('Crea un solo trabajador con nombre: '+name+' y apellido: '+lastName);
}
function replace(req, res, next) {
  res.send('Remplaza solo trabajador');
}
function edit(req, res, next) {
  res.send('Edita solo trabajador');
}
function destroy(req, res, next) {
  res.send('Elimina solo trabajador');
}
module.exports={getUsers,getUser,create,replace,edit,destroy};
