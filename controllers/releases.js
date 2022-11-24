const express=require("express");
const { findOneAndUpdate } = require("../models/release");
const Release=require('../models/release');
const Backlog = require("../models/backlog");
const config = require('config');

function getReleases(req, res, next) {
    Release.find().then(obj=>res.status(200).json({
        message:res.__('release.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('release.list_f'),
        error: e
    }));
}
function getRelease(req, res, next) {
  const id=req.params.id;
  Release.findOne({"_id":id}).then(obj=>res.status(200).json({
    message:res.__('release.get_s'),
    obj: obj
  }))
  .catch(e=>res.status(500).json({
    message:res.__('release.get_f'),
    error: e
  }));
}
async function create(req, res, next) {
  let backlogs=[];
  const startDate=req.body.startDate;
  const endDate=req.body.endDate;
  const backlogsIds=[req.body.backlogsIds];
  if(backlogsIds.length>1){
  for(const backlogId of backlogsIds){
    backlogs.push(await Backlog.findOne({"_id:":backlogId}));
  };}else{
    backlogs.push(await Backlog.findOne({"_id:":backlogsIds}));
  }
  let release=new Release({
    startDate:startDate,
    endDate: endDate,
    backlogs: backlogs
  });
  release.save().then(obj=>res.status(200).json({
    message:res.__('release.success'),
    obj: obj
  }))
  .catch(e => res.status(500).json({
    message:res.__('release.fail'),
    obj: e
  }));
}
async function replace(req, res, next) {
    let backlogs=[];
    const id=req.params.id;
    const startDate=req.body.startDate ? req.body.startDate : null;//FECHAS
    const endDate=req.body.endDate ? req.body.endDate : null;
    const backlogsIds=req.body.backlogs ? [req.body.backlogsIds] : [];
    if(backlogsIds.length>1){
        for(const backlogId of backlogsIds){
          backlogs.push(await Backlog.findOne({"_id:":backlogId}));
        };}else{
          backlogs.push(await Backlog.findOne({"_id:":backlogsIds}));
        }
    let release = new Object({
        _startDate:startDate,
        _endDate: endDate,
        _backlogs: backlogs
    });
    Release.findOneAndUpdate({"_id":id},release,{new:true}).then(obj=>res.status(200).json({
        message:res.__('release.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('release.modify_f'),
        error: e
    }));
}
async function edit(req, res, next) {
    let backlogs=[];
    const id=req.params.id;
    const startDate=req.body.startDate;
    const endDate=req.body.endDate;
    const backlogsIds=[req.body.backlogsIds];
    if(backlogsIds.length>1){
        for(const backlogId of backlogsIds){
          backlogs.push(await Backlog.findOne({"_id:":backlogId}));
        };}else{
          backlogs.push(await Backlog.findOne({"_id:":backlogsIds}));
    }
    let release = new Object();
    if(startDate){
        release._startDate=startDate;
    }
    if(endDate){
        release._endDate=endDate;
    }
    if(backlogs){
        release._backlogs=backlogs;
    }
    Release.findOneAndUpdate({"_id":id},release,{new:true}).then(obj=>res.status(200).json({
        message:res.__('release.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('release.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Release.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('release.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('release.destroy_f'),
        error: e
    }))
}
module.exports={getReleases,getRelease,create,replace,edit,destroy};