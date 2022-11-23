const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _startDate:Date,
    _endDate: Date,
    _releases:[{
        type: mongoose.Schema.ObjectId,
        ref: "Release"
    }]
});
class Board {
    constuctor(startDate,endDate,releases){
        this._startDate=startDate;
        this._endDate=endDate;
        this._releases=releases;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get endDate(){
        return this._endDate;
    }
    set endDate(endDate){
        this._endDate=endDate;
    }
    get releases(){
        return this._releases;
    }
    set releases(releases){
        this._releases=releases;
    }
}
schema.loadClass(Board);
module.exports=mongoose.model('Board',schema);
