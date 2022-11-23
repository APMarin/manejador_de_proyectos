const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _name: String,
    _applicationDate:Date,
    _startDate: Date,
    _description:String,
    _productManager: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    _productOwner:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    _team:[{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    _board:{
        type: mongoose.Schema.ObjectId,
        ref: "Board"
    }
});
class Project {
    constuctor(name,applicationDate,startDate,description,productManager,productOwner,team,board){
        this._name=name;
        this._applicationDate=applicationDate;
        this._startDate=startDate;
        this._description=description;
        this._productManager=productManager;
        this._productOwner=productOwner;
        this._team=team;
        this._board=board;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
    get applicationDate(){
        return this._applicationDate;
    }
    set applicationDate(applicationDate){
        this._applicationDate=applicationDate;
    }
    get description(){
        return this._description;
    }
    set description(description){
        this._description=description;
    }
    get productManager(){
        return this._productManager;
    }
    set productManager(productManager){
        this._productManager=productManager;
    }
    get productOwner(){
        return this._productOwner;
    }
    set productOwner(productOwner){
        this._productOwner=productOwner;
    }
    get team(){
        return this._team;
    }
    set team(team){
        this._team=team;
    }
    get board(){
        return this._board;
    }
    set board(board){
        this._board=board;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
}
schema.loadClass(Project);
module.exports=mongoose.model('Project',schema);
