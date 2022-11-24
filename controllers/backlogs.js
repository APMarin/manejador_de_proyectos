const express=require("express");
const { findOneAndUpdate } = require("../models/backlog");
const Backlog=require('../models/backlog');
const Story = require("../models/story");
const config = require('config');

function getBacklogs(req, res, next) {
    Backlog.find().then(obj=>res.status(200).json({
        message:res.__('backlog.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('backlog.list_f'),
        error: e
    }));
}
function getBacklog(req, res, next) {
  const id=req.params.id;
  Backlog.findOne({"_id":id}).then(obj=>res.status(200).json({
    message:res.__('backlog.get_s'),
    obj: obj
  }))
  .catch(e=>res.status(500).json({
    message:res.__('backlog.get_f'),
    error: e
  }));
}
async function create(req, res, next) {
  let stories=[];
  const startDate=req.body.startDate;
  const endDate=req.body.endDate;
  const storiesIds=[req.body.storiesIds];
  if(storiesIds.length>1){
  for(const storyId of storiesIds){
    stories.push(await Story.findOne({"_id:":storyId}));
  };}else{
    stories.push(await Story.findOne({"_id:":storiesIds}));
  }
  let backlog=new Backlog({
    startDate:startDate,
    endDate: endDate,
    stories: stories
  });
  backlog.save().then(obj=>res.status(200).json({
    message:res.__('backlog.success'),
    obj: obj
  }))
  .catch(e => res.status(500).json({
    message:res.__('backlog.fail'),
    obj: e
  }));
}
async function replace(req, res, next) {
    let stories=[];
    const id=req.params.id;
    const startDate=req.body.startDate ? req.body.startDate : "";//FECHAS
    const endDate=req.body.endDate ? req.body.endDate : "";
    const storiesIds=req.body.stories ? [req.body.storiesIds] : [];
    if(storiesIds.length>1){
        for(const storyId of storiesIds){
          stories.push(await Story.findOne({"_id:":storyId}));
        };}else{
          stories.push(await Story.findOne({"_id:":storiesIds}));
        }
    let backlog = new Object({
        _startDate:startDate,
        _endDate: endDate,
        _stories: stories
    });
    Backlog.findOneAndUpdate({"_id":id},backlog,{new:true}).then(obj=>res.status(200).json({
        message:res.__('backlog.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('backlog.modify_f'),
        error: e
    }));
}
async function edit(req, res, next) {
    let stories=[];
    const id=req.params.id;
    const startDate=req.body.startDate;
    const endDate=req.body.endDate;
    const storiesIds=[req.body.storiesIds];
    if(storiesIds.length>1){
        for(const storyId of storiesIds){
          stories.push(await Story.findOne({"_id:":storyId}));
        };}else{
          stories.push(await Story.findOne({"_id:":storiesIds}));
    }
    let backlog = new Object();
    if(startDate){
        backlog._startDate=startDate;
    }
    if(endDate){
        backlog._endDate=endDate;
    }
    if(stories){
        backlog._stories=stories;
    }
    Backlog.findOneAndUpdate({"_id":id},backlog,{new:true}).then(obj=>res.status(200).json({
        message:res.__('backlog.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('backlog.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Backlog.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('backlog.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('backlog.destroy_f'),
        error: e
    }))
}
module.exports={getBacklogs,getBacklog,create,replace,edit,destroy};