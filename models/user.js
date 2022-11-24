const mongoose=require('mongoose');
const schema=mongoose.Schema({
	_name: String,
	_lastName: String,
	_email: String,
	_pass: String,
	_salt: String
});

class User {
	constructor(name,lastName,email,pass,salt){
		this._name=name;
		this._lastName=lastName;
		this._email=email;
		this._pass=pass;
		this._salt=salt;
	}

	get name(){
		return this._name;
	}
	set name(v){
		this._name=v;
	}

	get lastName(){
		return this._lastName;
	}
	set lastName(v){
		this._lastName=v;
	}

	get email(){
		return this._email;
	}
	set email(v){
		this._email=v;
	}

	get pass(){
		return this._pass;
	}
	set pass(v){
		this._pass=v;
	}

	get salt(){
		return this._salt;
	}
	set salt(v){
		this._salt=v;
	}
}

schema.loadClass(User);
module.exports=mongoose.model('User',schema);