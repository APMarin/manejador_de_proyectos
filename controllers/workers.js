const express=require("express");
const Worker=require('../models/worker');
const Skill=require('../models/skill');
const config = require('config');

function getWorkers(req, res, next) {
    Worker.find().then(obj=>res.status(200).json({
        message:res.__('worker.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('worker.list_f'),
        error: e
    }));}
function getWorker(req, res, next) {
    const id=req.params.id;
    Worker.findOne({"_id":id}).then(obj=>res.status(200).json({
      message:res.__('worker.get_s'),
      obj: obj
    }))
    .catch(e=>res.status(500).json({
      message:res.__('worker.get_f'),
      error: e
    }));
}
async function create(req, res, next) {
  let skills=[];
  const name=req.body.name;
  const lastName=req.body.lastName;
  const birthday=req.body.birthday;
  const curp=req.body.curp;
  const rfc=req.body.rfc;
  const skillsIds=[req.body.skillsIds];
  if(skillsIds.length>1){
  for(const skillId of skillsIds){
    skills.push(await Skill.findOne({"_id:":skillId}));
  };}else{
    skills.push(await Skill.findOne({"_id:":skillsIds}));
  }
  let Address=new Object();
  Address.street=req.body.street;
  Address.number=req.body.number;
  Address.zip=req.body.zip;
  Address.state=req.body.state;
  let worker=new Worker({
    name:name,
    lastName:lastName,
    birthday:birthday,
    curp:curp,
    rfc:rfc,
    address:Address,
    skills:skills
  });
  worker.save().then(obj=>res.status(200).json({
    message:res.__('worker.success'),
    obj:obj
  })).catch(e=>res.status(400).json({
    message:res.__('worker.fail'),
    error:e
  }));
}
async function replace(req, res, next) {
  let skills=[];
    const id=req.params.id;
    let name=req.body.name ? req.body.name : "";
    let lastName=req.body.lastName ? req.body.lastName : "";
    const birthday=req.body.birthday ? req.body.birthday :"";
    const curp=req.body.curp ? req.body.curp : "";
    const rfc=req.body.rfc ? req.body.rfc : "";
    const skillsIds=req.body.skillsIds ? [req.body.skillsIds] : [];
    if(skillsIds.length>1){
    for(const skillId of skillsIds){
      skills.push(await Skill.findOne({"_id:":skillId}));
    };}else{
      skills.push(await Skill.findOne({"_id:":skillsIds}));
    }
    let Address=new Object();
    Address.street=req.body.street ? req.body.street :"";
    Address.number=req.body.number ? req.body.number :"";
    Address.zip=req.body.zip ? req.body.zip :"";
    Address.state=req.body.state ? req.body.state :"";
    let worker=new Worker({
        name:name,
        lastName:lastName,
        birthday:birthday,
        curp:curp,
        rfc:rfc,
        skills:skills,
        address:Address,
    });
    Worker.findOneAndUpdate({"_id":id},worker,{new:true}).then(obj=>res.status(200).json({
        message:res.__('worker.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('worker.modify_f'),
        error: e
    }));}
async function edit(req, res, next) {
  let skills=[];
    const name=req.body.name;
    const lastName=req.body.lastName;
    const birthday=req.body.birthday;
    const curp=req.body.curp;
    const rfc=req.body.rfc;
    const skillsIds=[req.body.skillsIds];
    if(skillsIds.length>1){
    for(const skillId of skillsIds){
      skills.push(await Skill.findOne({"_id:":skillId}));
    };}else{
      skills.push(await Skill.findOne({"_id:":skillsIds}));
    }
    let Address=new Object();
    Address.street=req.body.street;
    Address.number=req.body.number;
    Address.zip=req.body.zip;
    Address.state=req.body.state;
    let worker=new Worker();
    if(name){
        worker._name=name;
    }
    if(lastName){
        worker._lastName=lastName;
    }
    if(birthday){
        worker._birthday=birthday;
    }
    if(curp){
      worker._curp=curp;
    }
    if(rfc){
      worker._rfc=rfc;
    }
    if(skills){
      worker._skills=skills;
    }
    if(Address){
      worker._address=Address;
    }
    Worker.findOneAndUpdate({"_id":id},worker,{new:true}).then(obj=>res.status(200).json({
        message:res.__('worker.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('worker.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Worker.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('worker.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('worker.destroy_f'),
        error: e
    }))}
module.exports={getWorkers,getWorker,create,replace,edit,destroy};