const express=require("express");
const Project=require('../models/project');
const User=require('../models/user');
const Board=require('../models/board');
const config = require('config');

function getProjects(req, res, next) {
    Project.find().then(obj=>res.status(200).json({
        message:res.__('project.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('project.list_f'),
        error: e
    }));}
function getProject(req, res, next) {
    const id=req.params.id;
    Project.findOne({"_id":id}).then(obj=>res.status(200).json({
      message:res.__('project.get_s'),
      obj: obj
    }))
    .catch(e=>res.status(500).json({
      message:res.__('project.get_f'),
      error: e
    }));
}
async function create(req, res, next) {
  let team=[];
  const name=req.body.name;
  const applicationDate=req.body.applicationDate;
  const startDate=req.body.startDate;
  const description=req.body.description;
  const productManagerId=req.body.productManagerId;
  const productOwnerId=req.body.productOwnerId;
  const boardId=req.body.boardId;
  let productManager=await User.findOne({"_id":productManagerId});
  let productOwner=await User.findOne({"_id":productOwnerId});
  let board=await Board.findOne({"_id":boardId});
  const teamIds=[req.body.teamIds];
  if(teamIds.length>1){
  for(const userId of teamIds){
    team.push(await User.findOne({"_id:":userId}));
  }
  }else{
    team.push(await User.findOne({"_id:":teamIds}));
  }
  let project=new Project({
    name:name,
    applicationDate:applicationDate,
    startDate:startDate,
    description:description,
    productManager:productManager,
    productOwner:productOwner,
    board:board,
    team:team
  });
  project.save().then(obj=>res.status(200).json({
    message:res.__('project.success'),
    obj:obj
  })).catch(e=>res.status(400).json({
    message:res.__('project.fail'),
    error:e
  }));
}
async function replace(req, res, next) {
    let team=[];
    const id=req.params.id;
    let name=req.body.name ? req.body.name : "";
    let applicationDate=req.body.applicationDate ? req.body.applicationDate : null;
    const startDate=req.body.startDate ? req.body.startDate :null;
    const description=req.body.description ? req.body.description : "";
    const productManagerId=req.body.productManagerId ? req.body.productManagerId : 0;
    const productOwnerId=req.body.productOwnerId ? req.body.productOwnerId : 0;
    const boardId=req.body.boardId ? req.body.boardId : 0;
    let productManager=await User.findOne({"_id":productManagerId});
    let productOwner=await User.findOne({"_id":productOwnerId});
    let board=await Board.findOne({"_id":boardId});
    const teamIds=req.body.teamIds ? [req.body.teamIds] : [];
    if(teamIds.length>1){
    for(const skillId of teamIds){
      team.push(await Skill.findOne({"_id:":skillId}));
    };}else{
      team.push(await Skill.findOne({"_id:":teamIds}));
    }
    let project=new Project({
        name:name,
        applicationDate:applicationDate,
        startDate:startDate,
        description:description,
        productManager:productManager,
        productOwner:productOwner,
        team:team,
        board:board,
    });
    Project.findOneAndUpdate({"_id":id},project,{new:true}).then(obj=>res.status(200).json({
        message:res.__('project.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('project.modify_f'),
        error: e
    }));}
async function edit(req, res, next) {
    let team=[];
    const name=req.body.name;
    const applicationDate=req.body.applicationDate;
    const startDate=req.body.startDate;
    const description=req.body.description;
    const productManagerId=req.body.productManagerId;
    const productOwnerId=req.body.productOwnerId;
    const boardId=req.body.boardId;
    let productManager=await User.findOne({"_id":productManagerId});
    let productOwner=await User.findOne({"_id":productOwnerId});
    let board=await Board.findOne({"_id":boardId});
    const teamIds=[req.body.teamIds];
    if(teamIds.length>1){
    for(const skillId of teamIds){
      team.push(await Skill.findOne({"_id:":skillId}));
    };}else{
      team.push(await Skill.findOne({"_id:":teamIds}));
    }
    let project=new Project();
    if(name){
        project._name=name;
    }
    if(applicationDate){
        project._applicationDate=applicationDate;
    }
    if(startDate){
        project._startDate=startDate;
    }
    if(description){
      project._description=description;
    }
    if(productManager){
      project._productManager=productManager;
    }
    if(productOwner){
      project._productOwner=productOwner;
    }
    if(team){
      project._team=team;
    }
    if(board){
      project._board=board;
    }
    Project.findOneAndUpdate({"_id":id},project,{new:true}).then(obj=>res.status(200).json({
        message:res.__('project.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('project.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Project.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('project.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('project.destroy_f'),
        error: e
    }))}
module.exports={getProjects,getProject,create,replace,edit,destroy};