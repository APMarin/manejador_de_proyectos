const express=require("express");
const { findOneAndUpdate } = require("../models/board");
const Board=require('../models/board');
const Release = require("../models/release");
const config = require('config');

function getBoards(req, res, next) {
    Board.find().then(obj=>res.status(200).json({
        message:res.__('board.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res.__('board.list_f'),
        error: e
    }));
}
function getBoard(req, res, next) {
  const id=req.params.id;
  Board.findOne({"_id":id}).then(obj=>res.status(200).json({
    message:res.__('board.get_s'),
    obj: obj
  }))
  .catch(e=>res.status(500).json({
    message:res.__('board.get_f'),
    error: e
  }));
}
async function create(req, res, next) {
  let releases=[];
  const startDate=req.body.startDate;
  const endDate=req.body.endDate;
  const releasesIds=[req.body.releasesIds];
  if(releasesIds.length>1){
  for(const releaseId of releasesIds){
    releases.push(await Release.findOne({"_id:":releaseId}));
  };}else{
    releases.push(await Release.findOne({"_id:":releasesIds}));
  }
  let board=new Board({
    startDate:startDate,
    endDate: endDate,
    releases: releases
  });
  board.save().then(obj=>res.status(200).json({
    message:res.__('board.success'),
    obj: obj
  }))
  .catch(e => res.status(500).json({
    message:res.__('board.fail'),
    obj: e
  }));
}
async function replace(req, res, next) {
    let releases=[];
    const id=req.params.id;
    const startDate=req.body.startDate ? req.body.startDate : null;//FECHAS
    const endDate=req.body.endDate ? req.body.endDate : null;
    const releasesIds=req.body.releases ? [req.body.releasesIds] : [];
    if(releasesIds.length>1){
        for(const releaseId of releasesIds){
          releases.push(await Release.findOne({"_id:":releaseId}));
        };}else{
          releases.push(await Release.findOne({"_id:":releasesIds}));
        }
    let board = new Object({
        _startDate:startDate,
        _endDate: endDate,
        _releases: releases
    });
    Board.findOneAndUpdate({"_id":id},board,{new:true}).then(obj=>res.status(200).json({
        message:res.__('board.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('board.modify_f'),
        error: e
    }));
}
async function edit(req, res, next) {
    let releases=[];
    const id=req.params.id;
    const startDate=req.body.startDate;
    const endDate=req.body.endDate;
    const releasesIds=[req.body.releasesIds];
    if(releasesIds.length>1){
        for(const releaseId of releasesIds){
          releases.push(await Release.findOne({"_id:":releaseId}));
        };}else{
          releases.push(await Release.findOne({"_id:":releasesIds}));
    }
    let board = new Object();
    if(startDate){
        board._startDate=startDate;
    }
    if(endDate){
        board._endDate=endDate;
    }
    if(releases){
        board._releases=releases;
    }
    Board.findOneAndUpdate({"_id":id},board,{new:true}).then(obj=>res.status(200).json({
        message:res.__('board.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('board.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Board.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('board.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('board.destroy_f'),
        error: e
    }))
}
module.exports={getBoards,getBoard,create,replace,edit,destroy};