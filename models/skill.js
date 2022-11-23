const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _technology:String,
    _rank: {
        type: String,
        enum:['Master','Senior','Junior'],
        default:'Available'
    }
});
class Skill {
    constuctor(technology,rank){
        this._technology=technology;
        this._rank=rank;
    }
    get technology(){
        return this._technology;
    }
    set technology(technology){
        this._technology=technology;
    }
    get rank(){
        return this._rank;
    }
    set rank(rank){
        this._rank=rank;
    }
}
schema.loadClass(Skill);
module.exports=mongoose.model('Skill',schema);
