const express = require('express');
const bcrypt=require('bcrypt');
const User=require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');

function home (req, res, next) {
  res.render('index', { title: 'Express' });
}
function login (req, res, next) {
  let email=req.body.email;
  let password=req.body.password;
  User.findOne({"_email":email}).select('_password _salt').then((user)=>{
    if(user){
      bcrypt.hash(password, user.salt, (err, hash)=>{
    if(err){
      //login no ok
      res.status(403).json({
        message:res.__('bad.login'),
        obj: err
      });
    }
    if(hash == user.password){
          //login OK
          const jwtKey = config.get("secret.key");
          res.status(200).json({
            message:res.__('ok.login'),
            obj : jwt.sign({exp: Math.floor(Date.now()/1000)+60}, jwtKey)
          });
        }else{
          res.status(403).json({
            message:res.__('bad.login'),
            obj: null
          });
        }
      });
    }else{
      //login not ok
      res.status(403).json({
        message:res.__('bad.login'),
        obj: err
      });
    }
  }).catch((err)=>{
    //login no ok
    res.status(403).json({
      message:res.__('bad.login'),
      obj: err
    });
  });
}

module.exports={
  home,login
}
