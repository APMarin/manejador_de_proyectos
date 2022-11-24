const express=require("express");
const Story=require('../models/story');
const config = require('config');

function getStories(req, res, next) {
    Story.find().then(obj=>res.status(200).json({
        message:res._('story.list_s'),
        obj: obj
    }))
    .catch(e =>res.status(500).json({
        message:res._('story.list_f'),
        error: e
    }));}
function getStory(req, res, next) {
    const id=req.params.id;
    Story.findOne({"_id":id}).then(obj=>res.status(200).json({
      message:res._('story.get_s'),
      obj: obj
    }))
    .catch(e=>res.status(500).json({
      message:res._('story.get_f'),
      error: e
    }));
}
function create(req, res, next) {
  const name=req.body.name;
  const priority=req.body.priority;
  const size=req.body.size;
  const status=req.body.priority;
  const validated=req.body.validated;
  let Details=new Object();
  Details.how=req.body.how;
  Details.what=req.body.what;
  Details.for=req.body.for;
  Details.cause=req.body.cause;
  Details.date=req.body.date;
  Details.then=req.body.then;
  let story=new Story({
    name:name,
    priority:priority,
    size:size,
    status:status,
    validated:validated,
    details:Details,
  });
  story.save().then(obj=>res.status(200).json({
    message:res._('story.success'),
    obj:obj
  })).catch(e=>res.status(400).json({
    message:res._('story.fail'),
    error:e
  }));
}
function replace(req, res, next) {
    const id=req.params.id;
    let name=req.body.name ? req.body.name : "";
    const priority=req.body.priority ? req.body.priority :0;
    const size=req.body.size ? req.body.size :0;
    const status=req.body.status ? req.body.status :false;
    const validated=req.body.validated ? req.body.validated :false;
    let Details=new Object();
    Details.how=req.body.how ? req.body.how :"";
    Details.what=req.body.what ? req.body.what :"";
    Details.for=req.body.for ? req.body.for :"";
    Details.cause=req.body.cause ? req.body.cause :"";
    Details.date=req.body.date ? req.body.date :null;//Cómo se pone una fecha??
    Details.then=req.body.then ? req.body.then :"";
    let story=new Story({
        name:name,
        size:size,
        priority:priority,
        status:status,
        validated:validated,
        Details:Details,
    });
    Story.findOneAndUpdate({"_id":id},story,{new:true}).then(obj=>res.status(200).json({
        message:res.__('story.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('story.modify_f'),
        error: e
    }));}
function edit(req, res, next) {
    const name=req.body.name;
    const priority=req.body.priority;
    const size=req.body.size;
    const status=req.body.status;
    const validated=req.body.validated;
    let Details=new Object();
    Details.how=req.body.how;
    Details.what=req.body.what;
    Details.for=req.body.for;
    Details.cause=req.body.cause;
    Details.date=req.body.date;
    Details.then=req.body.then;
    let story=new Story();
    if(name){
      story._name=name;
    }
    if(priority){
      story._priority=priority;
    }
    if(size){
      story._size=size;
    }
    if(status){
      story._status=status;
    }
    if(validated){
      story._validated=validated;
    }
    if(Details){
      story._Details=Details;
    }
    Story.findOneAndUpdate({"_id":id},story,{new:true}).then(obj=>res.status(200).json({
        message:res.__('story.modify_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('story.modify_f'),
        error: e
    }));}
function destroy(req, res, next) {
    const id=req.params.id;
    Story.remove({"_id":id}).then(obj=>res.status(200).json({
        message:res.__('story.destroy_s'),
        obj: obj
    }))
    .catch(e=>res.status(500).json({
        message:res.__('story.destroy_f'),
        error: e
    }))}
module.exports={getStories,getStory,create,replace,edit,destroy};