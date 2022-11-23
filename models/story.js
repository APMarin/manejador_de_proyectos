const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _name:String,
    _priority: Number,
    _size: Number,
    _details: {
        how: String,
        what: String,
        for: String,
        cause: String,
        date: Date,
        then: String
    },
    _status: Boolean,
    _validated: Boolean
});
class Story {
    constuctor(name,priority,size,details,status,validated){
        this._name=name;
        this._priority=priority;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
    get priority(){
        return this._priority;
    }
    set priority(priority){
        this._priority=priority;
    }
    get size(){
        return this._size;
    }
    set size(size){
        this._size=size;
    }
    get details(){
        return this._details;
    }
    set details(details){
        this._details=details;
    }
    get status(){
        return this._status;
    }
    set status(status){
        this._status=status;
    }
    get validated(){
        return this._validated;
    }
    set validated(validated){
        this._validated=validated;
    }
}
schema.loadClass(Story);
module.exports=mongoose.model('Story',schema);
