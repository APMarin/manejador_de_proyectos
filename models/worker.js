const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _name: String,
    _lastName:String,
    _birthday: Date,
    _curp:String,
    _rfc: String,
    _address:{
        street: String,
        number: String,
        zip: Number,
        state: String
    },
    _skills:[{
        type: mongoose.Schema.ObjectId,
        ref: "Skill"
    }]
});
class Worker {
    constuctor(name,lastName,birthday,curp,rfc,address,skills){
        this._name=name;
        this._lastName=lastName;
        this._birthday=birthday;
        this._curp=curp;
        this._rfc=rfc;
        this._address=address;
        this._skills=skills;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName=lastName;
    }
    get curp(){
        return this._curp;
    }
    set curp(curp){
        this._curp=curp;
    }
    get rfc(){
        return this._rfc;
    }
    set rfc(rfc){
        this._rfc=rfc;
    }
    get address(){
        return this._address;
    }
    set address(address){
        this._address=address;
    }
    get skills(){
        return this._skills;
    }
    set skills(skills){
        this._skills=skills;
    }
    get birthday(){
        return this._birthday;
    }
    set birthday(birthday){
        this._birthday=birthday;
    }
}
schema.loadClass(Worker);
module.exports=mongoose.model('Worker',schema);