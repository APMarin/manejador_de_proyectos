const express=require("express")
function getUsers(req, res, next) {
  res.send('Lista de historias');
}
function getUser(req, res, next) {
  const id=req.params.id;
  res.send('Una sola historia con id: '+id);
}
function create(req, res, next) {
  const name=req.body.name;
  const lastName=req.body.lastName;
  res.send('Crea un solo historia con nombre: '+name+' y apellido: '+lastName);
}
function replace(req, res, next) {
  res.send('Remplaza solo historia');
}
function edit(req, res, next) {
  res.send('Edita solo historia');
}
function destroy(req, res, next) {
  res.send('Elimina solo historia');
}
module.exports={getUsers,getUser,create,replace,edit,destroy};
