const express=require("express");
const Skill=require('../models/skill');
const config = require('config');

function getSkills(req, res, next) {
    Skill.find().then(obj=>res.status(200).json({
        message:res.__('skills.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('skills.list_f'),
        error: e
    }));
}
    
function getSkill(req, res, next) {
    const id=req.params.id;
    Skill.findOne({"_id":id}).then(obj=>res.status(200).json({
      message:res.__('skills.get_s'),
      obj: obj
    }))
    .catch(e=>res.status(500).json({
      message:res.__('skills.get_f'),
      error: e
    }));
}

async function create(req, res, next) {
  const technology=req.body.technology;
  const rank=req.body.rank;
  let skill=new Skill({
    technology:technology,
    rank:rank,
  });
  skill.save().then(obj=>res.status(200).json({
    message:res.__('skills.success'),
    obj:obj
  })).catch(e=>res.status(400).json({
    message:res.__('skills.fail'),
    error:e
  }));
}

async function replace(req, res, next) {
    const id=req.params.id;
    let technology=req.body.technology ? req.body.technology : "";
    const rank=req.body.rank ? req.body.rank :"";
    let skill=new Skill({
        technology:technology,
        rank:rank,
    });
    Skill.findOneAndUpdate({"_id":id},skill,{new:true}).then(obj=>res.status(200).json({
        message:res.__('skills.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('skills.modify_f'),
        error: e
    }));
}

async function edit(req, res, next) {
    const id=req.params.id;
    const technology=req.body.technology;
    const rank=req.body.rank;

    let skill=new Skill();
    if(technology){
        skill._technology=technology;
    }
    if(rank){
        skill._rank=rank;
    }
    Skill.findOneAndUpdate({"_id":id},skill,{new:true}).then(obj=>res.status(200).json({
        message:res.__('skills.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('skills.modify_f'),
        error: e
    }));
}

function destroy(req, res, next) {
    const id=req.params.id;
    Skill.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('skills.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('skills.destroy_f'),
        error: e
    }))}

module.exports={getSkills,getSkill,create,replace,edit,destroy};