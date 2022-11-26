const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const config = require('config');


function list(req, res, next) {
  const page = req.query.page ? req.query.page : 1;
  User.paginate({}, {page: page, limit: 10})
  .then(obj => {
    if(obj.docs.length == 0) res.status(204).send();
    else res.status(200).json({
      message: res.__n('models.user', obj.docs.length),
      data: obj
    });
  })
  .catch(err => res.status(500).json(err));
}

function index(req, res, next){
    const id = req.params.id;
    res.send()
}

async function create(req, res, next){
    let name = req.body.name;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
      name: name,
      lastName: lastName,
      email: email,
      password, passwordHash,
      salt: salt
    });

    user.save().then(obj => res.status(200).json({
      message:res.__('user.success'),
      obj: obj
    }))
    .catch(ex => res.status(500).json({
      message:res.__('user.fail'),
      obj: ex
    }));
}


function replace(req,res,next) {
  const id=req.params.id;
  let name=req.body.name ? req.body.name : "";
  let lastName=req.body.lastName ? req.body.lastName : "";
  let email = req.body.email;
  let password = req.body.password;

  let user= new Object({
    _name:name,
    _lastName:lastName,
    _password:password,
    _email:email
  });
  User.findOneAndUpdate({"_id":id},actor).then(obj=>res.status(200).json({
    message:res.__('user.replaced_s'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('user.replaced_f'),
    obj:ex
  }));

}

function edit(req,res,next) {
  const id=req.params.id;
  const name=req.body.name;
  const lastName=req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  
  let user=new Object();

  if(name){
    actor._name=name;
  }
  if(lastName){
    actor._lastName=lastName;
  }

  User.findOneAndUpdate({"_id":id},actor).then(obj=>res.status(200).json({
    message:res.__('user.updated_s'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res.__('user.updated_f'),
    obj:ex
  }));
}

function destroy(req,res,next) {
  const id=req.params.id;
  User.remove({"_id":id}).then(obj=>res.status(200).json({
    message:res._('user.destroy_s'),
    obj:obj
  })).catch(ex=>res.status(500).json({
    message:res._('user.destroy_f'),
    obj:ex
  }));
}

module.exports={
  list,index,create,replace,edit,destroy
};