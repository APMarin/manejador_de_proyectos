const mongoose=require('mongoose');
const schema=mongoose.Schema({
    _startDate:Date,
    _endDate: Date,
    _stories:[{
        type: mongoose.Schema.ObjectId,
        ref: "Story"
    }]
});
class Backlog {
    constuctor(startDate,endDate,stories){
        this._startDate=startDate;
        this._endDate=endDate;
        this._stories=stories;
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
    get stories(){
        return this._stories;
    }
    set stories(stories){
        this._stories=stories;
    }
}
schema.loadClass(Backlog);
module.exports=mongoose.model('Backlog',schema);
